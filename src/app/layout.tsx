import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Capital Competences - Professional Training & Development',
  description: 'Expert professional training and development services to help you and your team reach their full potential.',
  metadataBase: new URL('https://capitalcompetences.com'),
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    siteName: 'Capital Competences',
    title: 'Capital Competences - Professional Training & Development',
    description: 'Expert professional training and development services to help you and your team reach their full potential.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Capital Competences',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Capital Competences - Professional Training & Development',
    description: 'Expert professional training and development services to help you and your team reach their full potential.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
