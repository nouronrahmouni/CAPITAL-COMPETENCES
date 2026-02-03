import { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
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
    <section className="relative hero-gradient text-white py-24 md:py-40">
      {/* Background Cover Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/contact-hero.jpeg"
          alt="Contact Us"
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

function MapSection() {
  return (
    <section className="py-16 bg-secondary-50">
      <div className="container-custom">
        <h2 className="text-2xl font-bold text-secondary-900 text-center mb-8">Our Locations</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* France Office Map */}
          <div className="card overflow-hidden">
            <div className="p-4 bg-primary-600 text-white">
              <h3 className="font-semibold flex items-center gap-2">
                <span>🇫🇷</span> France Office (Headquarters)
              </h3>
              <p className="text-sm text-primary-100">99 Avenue Achille Peretti, 92200 Neuilly-sur-Seine</p>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.5!2d2.2686!3d48.8847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66f8c6c0b7d0f%3A0x0!2s99%20Avenue%20Achille%20Peretti%2C%2092200%20Neuilly-sur-Seine%2C%20France!5e0!3m2!1sen!2sfr!4v1706886000000!5m2!1sen!2sfr"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="France Office Location"
              className="w-full"
            />
          </div>

          {/* USA Office Map */}
          <div className="card overflow-hidden">
            <div className="p-4 bg-primary-600 text-white">
              <h3 className="font-semibold flex items-center gap-2">
                <span>🇺🇸</span> USA Office
              </h3>
              <p className="text-sm text-primary-100">123 Business Center, Suite 500, New York, NY 10001</p>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9!2d-73.9857!3d40.7484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1706886000000!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="USA Office Location"
              className="w-full"
            />
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
