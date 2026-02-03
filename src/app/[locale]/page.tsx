import { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  Users, 
  Target, 
  Award, 
  Calendar,
  Clock,
  Star
} from 'lucide-react';

// Map blog post IDs to their images
const blogImages: Record<string, string> = {
  '1': '/images/blog/leadership-skills-2026.png',
  '2': '/images/blog/remote-team.svg',
  '3': '/images/blog/continuous-learning.svg',
  '4': '/images/blog/communication.svg',
  '5': '/images/blog/lululemonoffers.png',
  '6': '/images/blog/empowering-communities.jpeg',
  '7': '/images/blog/free-french-courses.jpeg',
  '8': '/images/blog/cultural-workshops.jpeg',
  '9': '/images/blog/job-training-youth.jpeg',
  '10': '/images/blog/volunteer-with-us.jpeg',
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  
  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      type: 'website',
      locale: locale === 'fr' ? 'fr_FR' : 'en_US',
      siteName: 'Capital Competences',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `https://capitalcompetences.com/${locale}`,
      languages: {
        'en': 'https://capitalcompetences.com/en',
        'fr': 'https://capitalcompetences.com/fr',
      },
    },
  };
}

function HeroSection() {
  const t = useTranslations('home.hero');
  const locale = useTranslations()('navigation.home').includes('Accueil') ? 'fr' : 'en';

  return (
    <section className="relative hero-gradient text-white py-20 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/home-hero.jpeg"
          alt="Capital Competences - Professional Training"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
              {t('title')}
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              {t('subtitle')}
            </p>
            <p className="text-lg text-primary-200 mb-8 max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {t('description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Link
                href={locale === 'fr' ? '/fr/services' : '/en/services'}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold bg-white text-primary-700 rounded-lg hover:bg-primary-50 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                {t('cta')}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href={locale === 'fr' ? '/fr/contact' : '/en/contact'}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold bg-transparent text-white border-2 border-white rounded-lg hover:bg-white/10 transition-colors duration-200"
              >
                {useTranslations('common')('contactUs')}
              </Link>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="hidden lg:block animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="relative h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/home-hero-2.jpeg"
                alt="Professional Training & Development"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const t = useTranslations('home.features');
  const items = t.raw('items') as Array<{ title: string; description: string }>;

  const icons = [Users, Target, Award, Calendar];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">{t('title')}</h2>
          <p className="section-subtitle">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={index}
                className="card p-6 text-center hover:transform hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-100 text-primary-600 rounded-xl mb-4">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">
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

function TestimonialsSection() {
  const t = useTranslations('home.testimonials');
  const items = t.raw('items') as Array<{ quote: string; author: string; role: string }>;

  return (
    <section className="py-16 md:py-24 bg-secondary-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">{t('title')}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div key={index} className="card p-6 md:p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-secondary-700 mb-6 italic">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <div className="border-t border-secondary-200 pt-4">
                <p className="font-semibold text-secondary-900">{item.author}</p>
                <p className="text-sm text-secondary-500">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  const t = useTranslations('home.cta');
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
          href={locale === 'fr' ? '/fr/contact' : '/en/contact'}
          className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold bg-white text-primary-700 rounded-lg hover:bg-primary-50 transition-colors duration-200 shadow-lg hover:shadow-xl"
        >
          {t('button')}
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}

function NewsSection() {
  const t = useTranslations('home.news');
  const tBlog = useTranslations('blog');
  const tCommon = useTranslations('common');
  const posts = tBlog.raw('posts') as Array<{
    id: string;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    readTime: string;
  }>;
  const categories = tBlog.raw('categories') as Record<string, string>;
  const locale = useTranslations()('navigation.home').includes('Accueil') ? 'fr' : 'en';

  // Show only the 3 latest posts
  const latestPosts = posts.slice(0, 3);

  return (
    <section className="py-16 md:py-24 bg-secondary-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">{t('title')}</h2>
          <p className="section-subtitle">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
            <article key={post.id} className="card overflow-hidden hover:transform hover:-translate-y-1 transition-transform duration-300 bg-white">
              <div className="h-48 relative bg-secondary-100">
                <Image
                  src={blogImages[post.id] || '/images/blog/leadership-skills-2026.png'}
                  alt={post.title}
                  fill
                  className="object-contain p-2"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-secondary-500 mb-3">
                  <span className="px-2 py-0.5 bg-primary-100 text-primary-700 rounded text-xs font-medium">
                    {categories[post.category]}
                  </span>
                  <span>{post.date}</span>
                </div>
                <h3 className="text-lg font-bold text-secondary-900 mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-secondary-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-secondary-500 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                  <Link
                    href={`/${locale}/blog/${post.id}`}
                    className="text-primary-600 font-medium text-sm hover:text-primary-700 transition-colors"
                  >
                    {tCommon('readMore')} →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href={`/${locale}/blog`}
            className="inline-flex items-center gap-2 px-6 py-3 text-lg font-semibold text-primary-600 border-2 border-primary-600 rounded-lg hover:bg-primary-600 hover:text-white transition-colors duration-200"
          >
            {t('viewAll')}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    { value: '500+', label: 'Clients Served' },
    { value: '10,000+', label: 'Professionals Trained' },
    { value: '98%', label: 'Satisfaction Rate' },
    { value: '15+', label: 'Years Experience' },
  ];

  return (
    <section className="py-12 bg-white border-y border-secondary-200">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary-600 mb-1">
                {stat.value}
              </p>
              <p className="text-secondary-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <StatsSection />
      <NewsSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
