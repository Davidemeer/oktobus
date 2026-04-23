import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const LOCALES = ['nl', 'en'] as const;
const DEFAULT_LOCALE: (typeof LOCALES)[number] = 'nl';

function detectLocale(request: NextRequest): (typeof LOCALES)[number] {
  const acceptLanguage = request.headers.get('accept-language') ?? '';
  const preferred = acceptLanguage
    .split(',')
    .map((s) => s.split(';')[0]?.trim().toLowerCase().split('-')[0])
    .find((code): code is (typeof LOCALES)[number] =>
      (LOCALES as readonly string[]).includes(code ?? ''),
    );
  return preferred ?? DEFAULT_LOCALE;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasLocale = LOCALES.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`),
  );
  if (hasLocale) return;

  const locale = detectLocale(request);
  const newUrl = request.nextUrl.clone();
  newUrl.pathname = `/${locale}${pathname === '/' ? '' : pathname}`;
  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: [
    // Skip Next.js internals, API routes, files with an extension, and metadata files
    '/((?!_next|api|favicon\\.ico|robots\\.txt|sitemap\\.xml|.*\\..*).*)',
  ],
};
