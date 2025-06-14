import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Portfolio - Ricardo Carvalho',
  description: 'Portfolio of a Senior Microsoft 365 Business Central Developer',
  openGraph: {
    title: 'Portfolio - Ricardo Carvalho',
    description: 'Portfolio of a Senior Microsoft 365 Business Central Developer',
    url: 'https://mrricardocarvalho.github.io/devportfolio',
    siteName: 'Ricardo Carvalho Portfolio',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}