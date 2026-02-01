import { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'privacy' });
  
  return {
    title: `${t('title')} | Capital Competences`,
    description: t('intro'),
    openGraph: {
      title: `${t('title')} | Capital Competences`,
      description: t('intro'),
      type: 'website',
    },
  };
}

function HeroSection() {
  const t = useTranslations('privacy');

  return (
    <section className="relative hero-gradient text-white py-16 md:py-20">
      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            {t('title')}
          </h1>
          <p className="text-primary-200">
            {t('lastUpdated')}
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60L60 55C120 50 240 40 360 35C480 30 600 30 720 32.5C840 35 960 40 1080 42.5C1200 45 1320 45 1380 45L1440 45V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}

function ContentSection() {
  const t = useTranslations('privacy');
  const sections = t.raw('sections') as Array<{ title: string; content: string }>;

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-secondary-600 mb-8 leading-relaxed">
              {t('intro')}
            </p>
            
            {sections.map((section, index) => (
              <div key={index} className="mb-8">
                <h2 className="text-xl font-bold text-secondary-900 mb-4">
                  {index + 1}. {section.title}
                </h2>
                <p className="text-secondary-700 leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <ContentSection />
    </>
  );
}
