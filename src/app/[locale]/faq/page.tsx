import { Metadata } from 'next';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import FAQAccordion from './FAQAccordion';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'faq' });
  
  return {
    title: `${t('hero.title')} | Capital Competences`,
    description: t('hero.subtitle'),
    openGraph: {
      title: `${t('hero.title')} | Capital Competences`,
      description: t('hero.subtitle'),
      type: 'website',
    },
  };
}

function HeroSection() {
  const t = useTranslations('faq.hero');

  return (
    <section className="relative hero-gradient text-white py-16 md:py-24">
      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('title')}
          </h1>
          <p className="text-xl text-primary-200">
            {t('subtitle')}
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 80L60 73.3C120 66.7 240 53.3 360 46.7C480 40 600 40 720 43.3C840 46.7 960 53.3 1080 56.7C1200 60 1320 60 1380 60L1440 60V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <FAQAccordion />
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  const t = useTranslations('faq.contact');
  const locale = useTranslations()('navigation.home').includes('Accueil') ? 'fr' : 'en';

  return (
    <section className="py-16 md:py-24 bg-secondary-50">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-secondary-600 mb-8">
            {t('description')}
          </p>
          <Link
            href={`/${locale}/contact`}
            className="btn-primary"
          >
            {t('button')}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function FAQPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
