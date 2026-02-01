import { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Calendar, Clock, Tag, ArrowRight } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'blog' });
  
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
  const t = useTranslations('blog.hero');

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

function BlogPosts() {
  const t = useTranslations('blog');
  const posts = t.raw('posts') as Array<{
    id: string;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    readTime: string;
    content: string;
  }>;
  const categories = t.raw('categories') as Record<string, string>;
  const locale = useTranslations()('navigation.home').includes('Accueil') ? 'fr' : 'en';

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        {/* Featured Post */}
        <div className="mb-12">
          <div className="card overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-64 lg:h-auto bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                <div className="text-white text-center p-8">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <p className="text-lg font-medium">Featured Article</p>
                </div>
              </div>
              <div className="p-6 lg:p-10">
                <div className="flex items-center gap-4 text-sm text-secondary-500 mb-4">
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full font-medium">
                    {categories[posts[0].category]}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {posts[0].date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {posts[0].readTime}
                  </span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-secondary-900 mb-4">
                  {posts[0].title}
                </h2>
                <p className="text-secondary-600 mb-6">
                  {posts[0].excerpt}
                </p>
                <Link
                  href={`/${locale}/blog/${posts[0].id}`}
                  className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                >
                  {useTranslations('common')('readMore')}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Other Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(1).map((post) => (
            <article key={post.id} className="card overflow-hidden hover:transform hover:-translate-y-1 transition-transform duration-300">
              <div className="h-48 bg-gradient-to-br from-primary-300 to-primary-500 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                  <Tag className="w-8 h-8 text-white" />
                </div>
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
                    {useTranslations('common')('readMore')} →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function NewsletterSection() {
  const t = useTranslations('blog.newsletter');

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
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder={t('placeholder')}
              className="flex-grow"
              required
              aria-label="Email address"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              {t('button')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <BlogPosts />
      <NewsletterSection />
    </>
  );
}
