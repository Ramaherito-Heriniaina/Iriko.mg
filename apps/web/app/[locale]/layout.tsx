import { ReactNode } from 'react';

import { notFound } from 'next/navigation';

import { Footer, Navbar } from '@/components/shared';

import { i18n, Locale } from '@/i18n';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

export default async function LangLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  if (!i18n.locales.includes(locale)) {
    notFound();
  }

  return (
    <div lang={locale} className="min-h-screen scroll-smooth">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
