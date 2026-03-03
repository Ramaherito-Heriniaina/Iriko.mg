'use client';

import { useEffect, useState } from 'react';

import { usePathname } from 'next/navigation';

import { getDictionary, Locale } from '@/i18n';

export function useDictionary<T>() {
  const pathname = usePathname();
  const locale = pathname.split('/')[1] as Locale;

  const [dictionary, setDictionary] = useState<T | null>(null);

  useEffect(() => {
    getDictionary(locale).then((dict) => setDictionary(dict as T));
  }, [locale]);

  return { dictionary, locale };
}
