import { Metadata } from 'next';
import { ReserveForm } from '@/components/reserve-form';

export const metadata: Metadata = {
  title: 'Reservar Clase - Juegotenis',
  description: 'Reserva tu clase de tenis en Juegotenis. Clases disponibles en Caballito y Núñez.',
  openGraph: {
    title: 'Reservar Clase - Juegotenis',
    description: 'Reserva tu clase de tenis en Juegotenis. Clases disponibles en Caballito y Núñez.',
  },
};

export default function ReservarPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container px-4">
        <div className="mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
              Reservar Clase
            </h1>
            <p className="text-lg text-muted-foreground">
              Completa el formulario y nos pondremos en contacto contigo para confirmar tu clase
            </p>
          </div>
          <ReserveForm />
        </div>
      </div>
    </div>
  );
}

