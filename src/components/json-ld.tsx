import { Metadata } from 'next';

export function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SportsActivityLocation',
    name: 'Juegotenis',
    description: 'Clases de tenis en Caballito y Núñez. Metodología con grupos reducidos y acompañamiento cercano.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://juegotenis.com.ar',
    telephone: '+541123110735',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Buenos Aires',
      addressRegion: 'CABA',
      addressCountry: 'AR',
      streetAddress: 'Caballito y Núñez',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '-34.6037',
      longitude: '-58.3816',
    },
    openingHours: 'Mo-Fr 13:00-22:00, Sa 09:00-18:00',
    priceRange: '$$',
    image: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://juegotenis.com.ar'}/brand/logo-light.jpg`,
    sameAs: [
      // Aquí se pueden agregar las redes sociales cuando estén disponibles
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}



