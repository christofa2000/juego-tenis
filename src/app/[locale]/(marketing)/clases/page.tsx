import { Metadata } from 'next';
import { ClassesDetail } from '@/components/sections/classes-detail';

export const metadata: Metadata = {
  title: 'Clases de Tenis - Juegotenis',
  description: 'Conoce nuestros tipos de clases: individuales, grupales, para niños, principiantes, intermedios y avanzados. Disponibles en Caballito y Núñez.',
  openGraph: {
    title: 'Clases de Tenis - Juegotenis',
    description: 'Conoce nuestros tipos de clases de tenis disponibles en Caballito y Núñez.',
  },
};

export default function ClasesPage() {
  return <ClassesDetail />;
}
