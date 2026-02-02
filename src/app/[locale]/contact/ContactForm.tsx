'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  Linkedin,
  Twitter,
  Facebook,
  Instagram
} from 'lucide-react';

export default function ContactForm() {
  const t = useTranslations('contact');
  const tCommon = useTranslations('common');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // In production, you would send this to your backend
    console.log('Form submitted:', formData);
    setStatus('success');
    
    // Reset form after success
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setStatus('idle');
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/capitalcompetences' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/capitalcompetences' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/capitalcompetences' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/capitalcompetences' },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-secondary-900 mb-6">
              {t('form.title')}
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
                  {t('form.name')} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t('form.namePlaceholder')}
                  className="w-full"
                  aria-required="true"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                  {t('form.email')} <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t('form.emailPlaceholder')}
                  className="w-full"
                  aria-required="true"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-2">
                  {t('form.phone')}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t('form.phonePlaceholder')}
                  className="w-full"
                />
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-secondary-700 mb-2">
                  {t('form.subject')} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder={t('form.subjectPlaceholder')}
                  className="w-full"
                  aria-required="true"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                  {t('form.message')} <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t('form.messagePlaceholder')}
                  className="w-full resize-none"
                  aria-required="true"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <span className="loading-spinner mr-2" />
                    {tCommon('sending')}
                  </>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle className="w-5 h-5 mr-2" />
                    {t('form.success').split('!')[0]}!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    {t('form.submit')}
                  </>
                )}
              </button>

              {/* Success/Error Messages */}
              {status === 'success' && (
                <div className="flex items-center gap-2 p-4 bg-green-50 text-green-700 rounded-lg">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <p>{t('form.success')}</p>
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-center gap-2 p-4 bg-red-50 text-red-700 rounded-lg">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <p>{t('form.error')}</p>
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-secondary-900 mb-6">
              {t('info.title')}
            </h2>
            <p className="text-secondary-600 mb-8">
              {t('info.description')}
            </p>

            {/* France Office */}
            <div className="mb-8 p-6 bg-secondary-50 rounded-xl">
              <h3 className="text-lg font-bold text-secondary-900 mb-4 flex items-center gap-2">
                <span className="text-xl">🇫🇷</span>
                {t('info.offices.france.title')}
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary-600 mt-0.5" />
                  <a 
                    href={`mailto:${t('info.offices.france.email')}`}
                    className="text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    {t('info.offices.france.email')}
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary-600 mt-0.5" />
                  <a 
                    href={`tel:${t('info.offices.france.phone').replace(/\s/g, '')}`}
                    className="text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    {t('info.offices.france.phone')}
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary-600 mt-0.5" />
                  <p className="text-secondary-600 whitespace-pre-line">
                    {t('info.offices.france.address')}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary-600 mt-0.5" />
                  <p className="text-secondary-600">
                    {t('info.offices.france.hours')}
                  </p>
                </div>
              </div>
            </div>

            {/* USA Office */}
            <div className="mb-8 p-6 bg-secondary-50 rounded-xl">
              <h3 className="text-lg font-bold text-secondary-900 mb-4 flex items-center gap-2">
                <span className="text-xl">🇺🇸</span>
                {t('info.offices.usa.title')}
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary-600 mt-0.5" />
                  <a 
                    href={`mailto:${t('info.offices.usa.email')}`}
                    className="text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    {t('info.offices.usa.email')}
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary-600 mt-0.5" />
                  <a 
                    href={`tel:${t('info.offices.usa.phone').replace(/\s/g, '')}`}
                    className="text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    {t('info.offices.usa.phone')}
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary-600 mt-0.5" />
                  <p className="text-secondary-600 whitespace-pre-line">
                    {t('info.offices.usa.address')}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary-600 mt-0.5" />
                  <p className="text-secondary-600">
                    {t('info.offices.usa.hours')}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 pt-8 border-t border-secondary-200">
              <h3 className="font-semibold text-secondary-900 mb-4">
                {t('social.title')}
              </h3>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-secondary-100 text-secondary-600 hover:bg-primary-600 hover:text-white rounded-lg transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
