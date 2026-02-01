import { Metadata } from 'next';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Lightbulb, 
  Shield, 
  Handshake,
  ArrowRight
} from 'lucide-react';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'about' });
  
  return {
    title: `${t('hero.title')} | Capital Competences`,
    description: t('mission.description'),
    openGraph: {
      title: `${t('hero.title')} | Capital Competences`,
      description: t('mission.description'),
      type: 'website',
    },
  };
}

function HeroSection() {
  const t = useTranslations('about.hero');

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

function MissionVisionSection() {
  const t = useTranslations('about');

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Mission */}
          <div className="card p-8 border-l-4 border-primary-600">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-primary-100 text-primary-600 rounded-lg">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-secondary-900">
                {t('mission.title')}
              </h2>
            </div>
            <p className="text-secondary-700 leading-relaxed">
              {t('mission.description')}
            </p>
          </div>

          {/* Vision */}
          <div className="card p-8 border-l-4 border-primary-600">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-primary-100 text-primary-600 rounded-lg">
                <Eye className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-secondary-900">
                {t('vision.title')}
              </h2>
            </div>
            <p className="text-secondary-700 leading-relaxed">
              {t('vision.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ValuesSection() {
  const t = useTranslations('about.values');
  const items = t.raw('items') as Array<{ title: string; description: string }>;

  const icons = [Award, Lightbulb, Shield, Handshake];

  return (
    <section className="py-16 md:py-24 bg-secondary-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">{t('title')}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 text-white rounded-2xl mb-4">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-secondary-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Award({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6"/>
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
    </svg>
  );
}

function HistorySection() {
  const t = useTranslations('about.history');

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="section-title">{t('title')}</h2>
          </div>
          <div className="prose prose-lg max-w-none text-secondary-700">
            <p className="text-lg leading-relaxed">
              {t('description')}
            </p>
          </div>
          
          {/* Timeline Visual */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { year: '2015', event: 'Founded' },
              { year: '2018', event: 'Expanded Services' },
              { year: '2021', event: 'Global Reach' },
              { year: '2024', event: 'Industry Leader' },
            ].map((milestone, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <p className="font-bold text-primary-600">{milestone.year}</p>
                <p className="text-secondary-600 text-sm">{milestone.event}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  const t = useTranslations('about.team');
  const members = t.raw('members') as Array<{ name: string; role: string; bio: string }>;

  return (
    <section className="py-16 md:py-24 bg-secondary-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">{t('title')}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <div key={index} className="card p-6 text-center">
              {/* Avatar Placeholder */}
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-2xl font-bold">
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-1">
                {member.name}
              </h3>
              <p className="text-primary-600 font-medium mb-3">
                {member.role}
              </p>
              <p className="text-secondary-600 text-sm">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  const t = useTranslations('common');
  const locale = useTranslations()('navigation.home').includes('Accueil') ? 'fr' : 'en';

  return (
    <section className="py-16 md:py-24 bg-primary-700 text-white">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {locale === 'fr' ? 'Prêt à Commencer ?' : 'Ready to Get Started?'}
        </h2>
        <p className="text-xl text-primary-200 mb-8 max-w-2xl mx-auto">
          {locale === 'fr' 
            ? 'Contactez-nous pour discuter de vos besoins en formation.'
            : 'Contact us to discuss your training needs.'
          }
        </p>
        <Link
          href={`/${locale}/contact`}
          className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold bg-white text-primary-700 rounded-lg hover:bg-primary-50 transition-colors duration-200 shadow-lg"
        >
          {t('contactUs')}
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}

export default function AboutPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <MissionVisionSection />
      <ValuesSection />
      <HistorySection />
      <TeamSection />
      <CTASection />
    </>
  );
}
