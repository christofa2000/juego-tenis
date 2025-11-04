'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { Phone, MapPin } from 'lucide-react';
import { WhatsAppButton } from '@/components/whatsapp-button';

export function Footer() {
  const t = useTranslations('common');
  const tContact = useTranslations('contact');
  
  return (
    <footer className="border-t bg-muted/50">
      <div className="container px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <Image
              src="/brand/logo-dark.jpg"
              alt="Juegotenis"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
            <p className="text-sm text-muted-foreground">
              Clases de tenis en Caballito y Núñez. Metodología con grupos reducidos y acompañamiento cercano.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold">Enlaces</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#clases" className="text-muted-foreground hover:text-primary">
                  Clases
                </Link>
              </li>
              <li>
                <Link href="/#testimonios" className="text-muted-foreground hover:text-primary">
                  Testimonios
                </Link>
              </li>
              <li>
                <Link href="/#ubicacion" className="text-muted-foreground hover:text-primary">
                  Ubicación
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-muted-foreground hover:text-primary">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold">{t('contact')}</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                {tContact('phone')}
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                {tContact('address')}
              </li>
            </ul>
            <WhatsAppButton />
          </div>
        </div>
        
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Juegotenis. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

