import { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  CheckCircle,
  Users,
  BookOpen,
  Monitor,
  UserCheck,
  Puzzle,
  Award
} from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'services' });
  
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
  const t = useTranslations('services.hero');

  return (
    <section className="relative hero-gradient text-white py-24 md:py-40">
      {/* Background Cover Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/services-hero.jpeg"
          alt="Our Services"
          fill
          className="object-cover opacity-30"
          priority
        />
      </div>
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
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

function ServicesGrid() {
  const t = useTranslations('services');
  const items = t.raw('items') as Array<{ 
    title: string; 
    description: string; 
    features: string[] 
  }>;

  const icons = [Users, BookOpen, Monitor, UserCheck, Puzzle, Award];
  const ids = ['leadership', 'skills', 'technical', 'team', 'custom', 'certification'];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((service, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div 
                key={index} 
                id={ids[index]}
                className="card p-6 md:p-8 hover:transform hover:-translate-y-1 transition-all duration-300 scroll-mt-24"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-100 text-primary-600 rounded-xl mb-6">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-secondary-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-secondary-700">
                      <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const locale = useTranslations()('navigation.home').includes('Accueil') ? 'fr' : 'en';
  
  const steps = locale === 'fr' ? [
    { step: '01', title: 'Consultation', description: 'Nous analysons vos besoins et objectifs' },
    { step: '02', title: 'Conception', description: 'Nous créons un programme personnalisé' },
    { step: '03', title: 'Livraison', description: 'Formation engageante et pratique' },
    { step: '04', title: 'Suivi', description: 'Évaluation et support continu' },
  ] : [
    { step: '01', title: 'Consultation', description: 'We analyze your needs and goals' },
    { step: '02', title: 'Design', description: 'We create a customized program' },
    { step: '03', title: 'Delivery', description: 'Engaging and practical training' },
    { step: '04', title: 'Follow-up', description: 'Evaluation and ongoing support' },
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">
            {locale === 'fr' ? 'Notre Processus' : 'Our Process'}
          </h2>
          <p className="section-subtitle">
            {locale === 'fr' 
              ? 'Une approche structurée pour des résultats exceptionnels'
              : 'A structured approach for exceptional results'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-primary-200 -translate-x-1/2" />
              )}
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 text-white rounded-full text-xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-secondary-600 text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  const t = useTranslations('services.cta');
  const locale = useTranslations()('navigation.home').includes('Accueil') ? 'fr' : 'en';

  return (
    <section className="py-16 md:py-24 bg-primary-700 text-white">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {t('title')}
        </h2>
        <p className="text-xl text-primary-200 mb-8 max-w-2xl mx-auto">
          {t('description')}
        </p>
        <Link
          href={`/${locale}/contact`}
          className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold bg-white text-primary-700 rounded-lg hover:bg-primary-50 transition-colors duration-200 shadow-lg"
        >
          {t('button')}
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <ServicesGrid />
      <ProcessSection />
      <CTASection />
    </>
  );
}
