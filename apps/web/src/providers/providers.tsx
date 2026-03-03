'use client';

import { ReactNode } from 'react';

import { ThemeProvider as NextThemesProvider } from 'next-themes';

export function Providers({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange enableColorScheme>
      {children}
    </NextThemesProvider>
  );
}
