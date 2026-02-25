import { ReactNode } from "react";

import { Geist } from "next/font/google";

import "@irikomg/ui/globals.css";

import { Providers } from "@/components/providers";
import { Metadata } from "next";

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Iriko",
  description: "Iriko.mg - Iriko.mg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontSans.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
