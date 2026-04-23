import type { Metadata } from 'next';
import Link from 'next/link';
import { Geist, Geist_Mono } from 'next/font/google';
import { notFound } from 'next/navigation';
import '../globals.css';
import { hasLocale, LOCALES, getDictionary } from './dictionaries';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Oktobus — AI-software op maat',
    template: '%s · Oktobus',
  },
  description:
    'AI-software bureau voor MKB. We bouwen prototypes in 4 weken voor €10k.',
};

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<'/[lang]'>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <html
      lang={lang}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-zinc-900">
        <header className="border-b border-zinc-200">
          <nav className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link href={`/${lang}`} className="font-semibold tracking-tight">
              {dict.site.company_name}
            </Link>
            <div className="flex items-center gap-6 text-sm">
              <Link href={`/${lang}`} className="hover:text-zinc-600">
                {dict.nav.home}
              </Link>
              <Link href={`/${lang}/over`} className="hover:text-zinc-600">
                {dict.nav.about}
              </Link>
              <span className="text-zinc-300">|</span>
              <Link
                href="/nl"
                className={lang === 'nl' ? 'font-semibold' : 'text-zinc-500 hover:text-zinc-900'}
              >
                NL
              </Link>
              <Link
                href="/en"
                className={lang === 'en' ? 'font-semibold' : 'text-zinc-500 hover:text-zinc-900'}
              >
                EN
              </Link>
            </div>
          </nav>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-zinc-200 mt-16 py-6 text-sm text-zinc-500">
          <div className="max-w-5xl mx-auto px-6">
            © {new Date().getFullYear()} {dict.site.company_name}. {dict.footer.rights}
          </div>
        </footer>
      </body>
    </html>
  );
}
