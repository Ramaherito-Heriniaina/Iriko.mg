import { ReactNode } from 'react';

import { Metadata } from 'next';
import { Raleway } from 'next/font/google';

import '@irikomg/ui/globals.css';

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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
