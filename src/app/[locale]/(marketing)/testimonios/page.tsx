import { Metadata } from 'next';
import { Testimonials } from '@/components/sections/testimonials';

export const metadata: Metadata = {
  title: 'Testimonios - Juegotenis',
  description: 'Lee los testimonios de nuestros alumnos sobre las clases de tenis en Juegotenis.',
  openGraph: {
    title: 'Testimonios - Juegotenis',
    description: 'Testimonios de alumnos de Juegotenis.',
  },
};

export default function TestimoniosPage() {
  return (
    <div className="py-20">
      <div className="container px-4">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 text-center">Testimonios</h1>
          <Testimonials />
        </div>
      </div>
    </div>
  );
}
