import { Metadata } from 'next';
import { ContactInfo } from '@/components/contact-info';
import { ContactForm } from '@/components/contact-form';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Contacto - Juegotenis',
  description: 'Contacta con Juegotenis. Teléfono: 11 2311-0735. Ubicaciones en Caballito y Núñez.',
  openGraph: {
    title: 'Contacto - Juegotenis',
    description: 'Contacta con Juegotenis. Teléfono: 11 2311-0735. Ubicaciones en Caballito y Núñez.',
  },
};

export default function ContactoPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container px-4">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
              Contacto
            </h1>
            <p className="text-lg text-muted-foreground">
              Estamos para ayudarte
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            <ContactInfo />
            
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-6">Envíanos un mensaje</h2>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
