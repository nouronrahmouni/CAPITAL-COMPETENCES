import { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import ContactForm from './ContactForm';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'contact' });
  
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
  const t = useTranslations('contact.hero');

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

function MapSection() {
  return (
    <section className="py-16 bg-secondary-50">
      <div className="container-custom">
        <div className="card overflow-hidden">
          {/* Placeholder for map - in production, use Google Maps or similar */}
          <div className="h-80 bg-secondary-200 flex items-center justify-center">
            <div className="text-center text-secondary-500">
              <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-lg font-medium">Interactive Map</p>
              <p className="text-sm">123 Business Center, Suite 500</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <ContactForm />
      <MapSection />
    </>
  );
}
