import { ReactNode } from 'react';

import { Metadata } from 'next';
import { Raleway } from 'next/font/google';

import '@irikomg/ui/globals.css';

import { Footer, Navbar } from '@/components/shared';

import { Providers } from '@/providers/providers';

const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Iriko.mg - Vokatra tsara no tanjonay',
  description:
    'Welcome to Iriko.mg, the official site of our Malagasy company founded in 2022, dedicated to sustainable development, quality, and promoting local expertise.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${raleway.className} antialiased`}>
        <Providers>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
