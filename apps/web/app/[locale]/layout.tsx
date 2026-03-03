import { ReactNode } from 'react';

import { notFound } from 'next/navigation';

import { i18n, Locale } from '@/i18n';
import { Navbar } from '@/components/shared';

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
    <div lang={locale} className="min-h-screen">
      <Navbar />
      {children}
    </div>
  );
}
