import type { Metadata } from 'next';
import { Playfair_Display } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/styles/globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://alliswellent.com'),
  title: {
    default: 'All is Well Entertainment — Award-Winning Video Production',
    template: '%s | All is Well Entertainment',
  },
  description:
    'Emmy award-winning video production company specializing in commercial, documentary, and non-profit storytelling. Founded by Hayden Mauk with 25+ years of experience.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://alliswellent.com',
    siteName: 'All is Well Entertainment',
    title: 'All is Well Entertainment — Award-Winning Video Production',
    description:
      'Emmy award-winning video production company specializing in commercial, documentary, and non-profit storytelling.',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@alliswellent',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={playfair.variable}>
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
