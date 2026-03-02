import { ReactNode } from 'react';

import '@irikomg/ui/globals.css';

import { Footer, Navbar } from '@/components/shared';

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
