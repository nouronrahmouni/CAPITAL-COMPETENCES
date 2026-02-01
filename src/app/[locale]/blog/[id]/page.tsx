import { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Calendar, Clock, ArrowLeft, ArrowRight, Share2 } from 'lucide-react';

// Map blog post IDs to their images
const blogImages: Record<string, string> = {
  '1': '/images/blog/leadership-skills-2026.png',
  '2': '/images/blog/remote-team.svg',
  '3': '/images/blog/continuous-learning.svg',
  '4': '/images/blog/communication.svg',
};

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ locale: string; id: string }> 
}): Promise<Metadata> {
  const { locale, id } = await params;
  const t = await getTranslations({ locale, namespace: 'blog' });
  const posts = t.raw('posts') as Array<{ id: string; title: string; excerpt: string }>;
  const post = posts.find(p => p.id === id);
  
  if (!post) {
    return { title: 'Post Not Found' };
  }

  return {
    title: `${post.title} | Capital Competences`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Capital Competences`,
      description: post.excerpt,
      type: 'article',
    },
  };
}

export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
  ];
}

export default async function BlogPostPage({ 
  params 
}: { 
  params: Promise<{ locale: string; id: string }> 
}) {
  const { locale, id } = await params;
  setRequestLocale(locale);
  
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
  
  const post = posts.find(p => p.id === id);
  const currentIndex = posts.findIndex(p => p.id === id);
  const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const nextPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

  if (!post) {
    notFound();
  }

  return (
    <>
      {/* Hero */}
      <section className="relative hero-gradient text-white py-16 md:py-24">
        <div className="container-custom relative z-10">
          <Link
            href={`/${locale}/blog`}
            className="inline-flex items-center gap-2 text-primary-200 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {useTranslations('common')('viewAll')}
          </Link>
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 text-sm text-primary-200 mb-4">
              <span className="px-3 py-1 bg-white/20 rounded-full font-medium">
                {categories[post.category]}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              {post.title}
            </h1>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 80L60 73.3C120 66.7 240 53.3 360 46.7C480 40 600 40 720 43.3C840 46.7 960 53.3 1080 56.7C1200 60 1320 60 1380 60L1440 60V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {/* Article Image */}
            <div className="aspect-video relative bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl mb-8 overflow-hidden">
              <Image
                src={blogImages[id] || '/images/blog/leadership-skills.svg'}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-secondary-600 mb-6 leading-relaxed">
                {post.excerpt}
              </p>
              <p className="text-secondary-700 leading-relaxed">
                {post.content}
              </p>
              
              {/* Sample additional content */}
              <h2 className="text-2xl font-bold text-secondary-900 mt-8 mb-4">
                Key Takeaways
              </h2>
              <ul className="list-disc list-inside text-secondary-700 space-y-2">
                <li>Understanding the fundamentals is crucial for long-term success</li>
                <li>Continuous learning and adaptation are essential in today&apos;s dynamic environment</li>
                <li>Practical application reinforces theoretical knowledge</li>
                <li>Building strong teams requires intentional effort and clear communication</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-secondary-900 mt-8 mb-4">
                Conclusion
              </h2>
              <p className="text-secondary-700 leading-relaxed">
                Investing in professional development is not just an expense—it&apos;s a strategic investment in your organization&apos;s future. By prioritizing learning and growth, you create a culture of excellence that attracts and retains top talent while driving sustainable business results.
              </p>
            </div>

            {/* Share */}
            <div className="mt-12 pt-8 border-t border-secondary-200">
              <div className="flex items-center gap-4">
                <span className="text-secondary-600 font-medium flex items-center gap-2">
                  <Share2 className="w-5 h-5" />
                  Share this article:
                </span>
                <div className="flex gap-2">
                  {['LinkedIn', 'Twitter', 'Facebook'].map((platform) => (
                    <button
                      key={platform}
                      className="px-4 py-2 text-sm text-secondary-600 bg-secondary-100 rounded-lg hover:bg-primary-100 hover:text-primary-600 transition-colors"
                    >
                      {platform}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-12 pt-8 border-t border-secondary-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {prevPost && (
                  <Link
                    href={`/${locale}/blog/${prevPost.id}`}
                    className="p-4 rounded-lg border border-secondary-200 hover:border-primary-300 hover:bg-primary-50 transition-colors group"
                  >
                    <span className="text-sm text-secondary-500 flex items-center gap-1 mb-1">
                      <ArrowLeft className="w-4 h-4" />
                      Previous
                    </span>
                    <span className="font-semibold text-secondary-900 group-hover:text-primary-600 transition-colors">
                      {prevPost.title}
                    </span>
                  </Link>
                )}
                {nextPost && (
                  <Link
                    href={`/${locale}/blog/${nextPost.id}`}
                    className="p-4 rounded-lg border border-secondary-200 hover:border-primary-300 hover:bg-primary-50 transition-colors group md:text-right"
                  >
                    <span className="text-sm text-secondary-500 flex items-center gap-1 mb-1 md:justify-end">
                      Next
                      <ArrowRight className="w-4 h-4" />
                    </span>
                    <span className="font-semibold text-secondary-900 group-hover:text-primary-600 transition-colors">
                      {nextPost.title}
                    </span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
