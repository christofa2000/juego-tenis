'use client';

import { useTranslations } from 'next-intl';
import { MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('@/components/map'), {
  ssr: false,
  loading: () => (
    <div className="h-[400px] w-full bg-muted animate-pulse rounded-lg flex items-center justify-center">
      <p className="text-muted-foreground">Cargando mapa...</p>
    </div>
  ),
});

export function MapSection() {
  const t = useTranslations('location');
  const tContact = useTranslations('contact');
  
  return (
    <section id="ubicacion" className="py-20 scroll-mt-16">
      <div className="container px-4">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('subtitle')}
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4 mb-6">
                <div className="rounded-full bg-primary/10 p-3">
                  <MapPin className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">{t('title')}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Nos encontramos en dos ubicaciones estratégicas, ambas con fácil acceso y excelente conectividad.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-sm mb-1">Sede Caballito</h4>
                      <p className="text-sm text-muted-foreground">Doblás 1043, Caballito, Buenos Aires</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1">Sede Núñez</h4>
                      <p className="text-sm text-muted-foreground">Av. del Libertador 7208, C1429 Cdad. Autónoma de Buenos Aires</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Map />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}


