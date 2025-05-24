import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import Script from 'next/script';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ArthurGreatServices - Your Trusted Logistics Partner',
  description:
    'Comprehensive clearing, forwarding, and logistics services for businesses worldwide.',
  generator: 'v0.dev',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* JivoChat Widget Script */}
        <Script 
          src="//code.jivosite.com/widget/cMxCNv3Z6S" 
          strategy="lazyOnload"
          async
        />
      </head>
      <body className={inter.className}>
        {/* Toast container */}
        <Toaster position="top-right" />
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}