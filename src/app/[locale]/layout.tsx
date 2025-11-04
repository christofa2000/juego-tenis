import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Providers } from '../providers';
import { Analytics } from '@/components/analytics';
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Juegotenis - Clases de tenis en Caballito y Núñez",
    template: "%s | Juegotenis",
  },
  description: "Clases de tenis en Caballito y Núñez. Metodología con grupos reducidos y acompañamiento cercano. Horarios centrales (13-22).",
  keywords: ["tenis", "clases de tenis", "Caballito", "Núñez", "escuela de tenis", "tenis para niños", "tenis para adultos"],
  authors: [{ name: "Juegotenis" }],
  creator: "Juegotenis",
  publisher: "Juegotenis",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://juegotenis.com.ar"),
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "/",
    siteName: "Juegotenis",
    title: "Juegotenis - Clases de tenis en Caballito y Núñez",
    description: "Clases de tenis en Caballito y Núñez. Metodología con grupos reducidos y acompañamiento cercano.",
    images: [
      {
        url: "/brand/logo-light.jpg",
        width: 1200,
        height: 630,
        alt: "Juegotenis - Clases de tenis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Juegotenis - Clases de tenis en Caballito y Núñez",
    description: "Clases de tenis en Caballito y Núñez. Metodología con grupos reducidos y acompañamiento cercano.",
    images: ["/brand/logo-light.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const locales = ['es'];

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  if (!locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <NextIntlClientProvider messages={messages}>
            <Analytics />
            {children}
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}

