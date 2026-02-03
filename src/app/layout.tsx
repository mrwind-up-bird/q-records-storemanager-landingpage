import type { Metadata, Viewport } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import { siteConfig } from '@/lib/constants';
import { Header } from '@/components/sections/header';
import { Footer } from '@/components/sections/footer';
import { StickyCTA } from '@/components/sections/sticky-cta';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fraunces',
  weight: ['300', '400', '500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Professionelle Schallplatten-Inventarverwaltung`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'Schallplatten Software',
    'Vinyl Inventar',
    'Record Store Management',
    'Discogs Integration',
    'POS System Vinyl',
    'Plattenladen Software',
    'Bestandsverwaltung Musik',
    'Record Shop Germany',
  ],
  authors: [{ name: 'Q-Records', url: siteConfig.url }],
  creator: 'Q-Records',
  publisher: 'Q-Records',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
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
};

export const viewport: Viewport = {
  themeColor: '#1A1A1A',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${fraunces.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="min-h-screen bg-vinyl-black text-off-white antialiased">
        <Header />
        <main className="relative">{children}</main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
