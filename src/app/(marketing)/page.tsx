import { Metadata } from 'next';
import { Hero } from '@/components/sections/hero';
import { Benefits } from '@/components/sections/benefits';
import { ClassesGrid } from '@/components/sections/classes-grid';
import { Testimonials } from '@/components/sections/testimonials';
import { MapSection } from '@/components/sections/map-section';
import { CTA } from '@/components/sections/cta';
import { JsonLd } from '@/components/json-ld';

export const metadata: Metadata = {
  title: 'Clases de tenis en Caballito y Núñez',
  description: 'Clases de tenis en Caballito y Núñez. Metodología con grupos reducidos y acompañamiento cercano. Horarios centrales (13-22).',
  openGraph: {
    title: 'Juegotenis - Clases de tenis en Caballito y Núñez',
    description: 'Clases de tenis en Caballito y Núñez. Metodología con grupos reducidos y acompañamiento cercano.',
    images: ['/brand/logo-light.jpg'],
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <Hero />
      <Benefits />
      <ClassesGrid />
      <Testimonials />
      <MapSection />
      <CTA />
    </>
  );
}

