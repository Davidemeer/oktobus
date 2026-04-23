import Link from 'next/link';
import { notFound } from 'next/navigation';
import { hasLocale, getDictionary } from './dictionaries';

export default async function Home({ params }: PageProps<'/[lang]'>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <section className="max-w-3xl mx-auto px-6 py-24">
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
        {dict.home.hero_title}
      </h1>
      <p className="mt-6 text-lg text-zinc-600 leading-relaxed">
        {dict.home.hero_subtitle}
      </p>
      <div className="mt-10 flex flex-col sm:flex-row gap-3">
        <Link
          href={`/${lang}/contact`}
          className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-700 transition"
        >
          {dict.home.cta_primary}
        </Link>
        <Link
          href={`/${lang}/werkwijze`}
          className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-zinc-300 text-sm font-medium hover:bg-zinc-50 transition"
        >
          {dict.home.cta_secondary}
        </Link>
      </div>
    </section>
  );
}
