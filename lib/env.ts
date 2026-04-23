import { z } from 'zod';

const EnvSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'test', 'production'])
    .default('development'),
  NEXT_PUBLIC_SITE_URL: z.url().default('http://localhost:3000'),
  // Added in later phases:
  // RESEND_API_KEY: z.string().min(1),
  // CONTACT_TO_EMAIL: z.email(),
  // NEXT_PUBLIC_CAL_LINK: z.url(),
  // TURNSTILE_SITE_KEY: z.string().min(1),
  // TURNSTILE_SECRET_KEY: z.string().min(1),
  // UPSTASH_REDIS_REST_URL: z.url(),
  // UPSTASH_REDIS_REST_TOKEN: z.string().min(1),
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
