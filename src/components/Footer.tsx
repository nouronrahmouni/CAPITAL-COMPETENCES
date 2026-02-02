'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram,
  ArrowUp
} from 'lucide-react';

export default function Footer() {
  const t = useTranslations();
  const locale = useLocale();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: t('navigation.home'), href: `/${locale}` },
    { name: t('navigation.about'), href: `/${locale}/about` },
    { name: t('navigation.services'), href: `/${locale}/services` },
    { name: t('navigation.blog'), href: `/${locale}/blog` },
    { name: t('navigation.faq'), href: `/${locale}/faq` },
    { name: t('navigation.contact'), href: `/${locale}/contact` },
  ];

  const serviceLinks = [
    { name: t('services.items.0.title'), href: `/${locale}/services#leadership` },
    { name: t('services.items.1.title'), href: `/${locale}/services#skills` },
    { name: t('services.items.2.title'), href: `/${locale}/services#technical` },
    { name: t('services.items.3.title'), href: `/${locale}/services#team` },
  ];

  const legalLinks = [
    { name: t('footer.privacyPolicy'), href: `/${locale}/privacy` },
    { name: t('footer.termsOfService'), href: `/${locale}/terms` },
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/capitalcompetences' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/capitalcompetences' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/capitalcompetences' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/capitalcompetences' },
  ];

  return (
    <footer className="bg-secondary-900 text-secondary-300">
      {/* Main Footer */}
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link
              href={`/${locale}`}
              className="flex items-center gap-2 text-xl font-bold text-white mb-4"
            >
              <Image
                src="/logo.png"
                alt="Capital Competences Logo"
                width={150}
                height={50}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-secondary-400 mb-6">
              {t('footer.description')}
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href={`mailto:${t('contact.info.offices.france.email')}`}
                className="flex items-center gap-3 text-secondary-400 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>{t('contact.info.offices.france.email')}</span>
              </a>
              <a
                href={`tel:${t('contact.info.offices.france.phone').replace(/\s/g, '')}`}
                className="flex items-center gap-3 text-secondary-400 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>{t('contact.info.offices.france.phone')}</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-secondary-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.services')}</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-secondary-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.legal')}</h3>
            <ul className="space-y-3 mb-6">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-secondary-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-white font-semibold mb-4">{t('common.followUs')}</h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-secondary-800 text-secondary-400 hover:bg-primary-600 hover:text-white rounded-lg transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-800">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-secondary-500 text-sm text-center md:text-left">
            {t('common.copyright')}
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-secondary-400 hover:text-white transition-colors"
            aria-label={t('common.backToTop')}
          >
            <span className="text-sm">{t('common.backToTop')}</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
