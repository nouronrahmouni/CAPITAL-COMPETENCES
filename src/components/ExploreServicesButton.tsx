'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

interface ExploreServicesButtonProps {
  href: string;
  label: string;
}

export default function ExploreServicesButton({ href, label }: ExploreServicesButtonProps) {
  const hasTracked = useRef(false);

  const handleClick = () => {
    // Fire Google Ads conversion event only once per click session
    if (typeof window !== 'undefined' && window.gtag && !hasTracked.current) {
      hasTracked.current = true;
      window.gtag('event', 'conversion', {
        'send_to': 'AW-16764013342/7vQLCK6qipUaEJ6W2rk-',
        'value': 3.0,
        'currency': 'USD'
      });
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold bg-white text-primary-700 rounded-lg hover:bg-primary-50 transition-colors duration-200 shadow-lg hover:shadow-xl"
    >
      {label}
      <ArrowRight className="w-5 h-5" />
    </Link>
  );
}
