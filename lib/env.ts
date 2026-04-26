import { z } from 'zod';

const EnvSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'test', 'production'])
    .default('development'),
  NEXT_PUBLIC_SITE_URL: z.url().default('http://localhost:3000'),
  // Intake form — optional. When unset, the Server Action logs to the console
  // instead of sending email (dev fallback).
  RESEND_API_KEY: z.string().min(1).optional(),
  // Override the from-address used by Resend (e.g. while the oktobus.nl
  // sending domain isn't verified yet, set this to onboarding@resend.dev).
  RESEND_FROM: z.string().min(1).optional(),
  CONTACT_TO_EMAIL: z.email().default('davidemeer@gmail.com'),
});

const parsed = EnvSchema.safeParse(process.env);

if (!parsed.success) {
  const issues = parsed.error.issues
    .map((i) => `  - ${i.path.join('.') || '(root)'}: ${i.message}`)
    .join('\n');
  console.error(`\n❌ Invalid environment variables:\n${issues}\n`);
  throw new Error('Invalid environment variables');
}

export const env = parsed.data;
