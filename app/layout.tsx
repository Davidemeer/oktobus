import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { SmoothScroll } from '@/components/layout/smooth-scroll';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const geist = Geist({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-geist',
  display: 'swap',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-geist-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Oktobus · AI-software op maat',
    template: '%s · Oktobus',
  },
  description:
    'AI-software op maat. Product, Design en Engineering onder één dak. Production-ready, niet prototype-met-plakband.',
  openGraph: {
    title: 'Oktobus · AI-software op maat',
    description:
      'AI-software op maat. Production-ready, niet prototype-met-plakband.',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Oktobus',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oktobus · AI-software op maat',
    description: 'AI-software op maat.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={`${geist.variable} ${geistMono.variable}`}>
      <body className="bg-bone text-ink antialiased min-h-screen flex flex-col">
        <SmoothScroll>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
