'use server';

import { z } from 'zod';
import { Resend } from 'resend';

const IntakeSchema = z.object({
  naam: z.string().trim().min(2, 'Naam is te kort').max(120),
  bedrijf: z.string().trim().max(200).optional().or(z.literal('')),
  email: z.email('Geldig e-mailadres ontbreekt'),
  tags: z.array(z.string().max(50)).max(10),
  timeline: z.string().trim().max(80),
  bericht: z.string().trim().max(4000).optional().or(z.literal('')),
  // Honeypot — must remain empty. Bots usually fill all fields.
  website: z.string().max(0, 'Spam gedetecteerd'),
});

export type IntakeState =
  | { status: 'idle' }
  | { status: 'error'; message: string }
  | { status: 'success' };

function formatBody(data: z.infer<typeof IntakeSchema>): string {
  return [
    `Nieuwe intake via oktobus.com`,
    ``,
    `Naam:     ${data.naam}`,
    `Bedrijf:  ${data.bedrijf || '—'}`,
    `E-mail:   ${data.email}`,
    `Tags:     ${data.tags.length ? data.tags.join(', ') : '—'}`,
    `Timeline: ${data.timeline || '—'}`,
    ``,
    `Bericht:`,
    data.bericht || '—',
  ].join('\n');
}

export async function submitIntake(
  _prev: IntakeState,
  formData: FormData,
): Promise<IntakeState> {
  const parsed = IntakeSchema.safeParse({
    naam: formData.get('naam'),
    bedrijf: formData.get('bedrijf') ?? '',
    email: formData.get('email'),
    tags: formData.getAll('tags').map(String),
    timeline: formData.get('timeline') ?? '',
    bericht: formData.get('bericht') ?? '',
    website: formData.get('website') ?? '',
  });

  if (!parsed.success) {
    const first = parsed.error.issues[0];
    // Honeypot trip: silently pretend success so bots don't learn.
    if (first?.path[0] === 'website') return { status: 'success' };
    return { status: 'error', message: first?.message ?? 'Controleer je invoer.' };
  }

  const data = parsed.data;
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? 'davidemeer@gmail.com';
  const body = formatBody(data);
  const subject = `Intake · ${data.naam}${data.bedrijf ? ' · ' + data.bedrijf : ''}`;

  if (!apiKey) {
    // Local dev fallback: no key configured → log so submission is visible.
    console.log('\n──────── INTAKE (geen RESEND_API_KEY, niet verzonden) ────────');
    console.log(`To: ${to}\nSubject: ${subject}\n\n${body}`);
    console.log('──────────────────────────────────────────────────────────────\n');
    return { status: 'success' };
  }

  // From-adres: gebruik intake@oktobus.nl zodra het domein is geverifieerd in
  // Resend; tot die tijd valt 'ie terug op resend.dev (geen DNS-setup vereist).
  const from = process.env.RESEND_FROM ?? 'Oktobus <intake@oktobus.nl>';

  try {
    const resend = new Resend(apiKey);
    const result = await resend.emails.send({
      from,
      to,
      replyTo: data.email,
      subject,
      text: body,
    });
    if (result.error) {
      console.error('Resend error:', result.error);
      return { status: 'error', message: 'Verzenden mislukt. Probeer mailen naar david@oktobus.nl.' };
    }
    return { status: 'success' };
  } catch (err) {
    console.error('Intake submission failed:', err);
    return { status: 'error', message: 'Er ging iets mis. Probeer mailen naar david@oktobus.nl.' };
  }
}
