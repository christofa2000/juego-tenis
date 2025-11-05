'use client';

import { TreePine, Clock, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function Benefits() {
  const benefits = [
    {
      icon: TreePine,
      title: 'Clases en predio verde',
      description: 'Clases en espacios naturales y bien cuidados, con canchas en excelente estado.',
    },
    {
      icon: Clock,
      title: 'Horarios centrales (13–22)',
      description: 'Horarios flexibles que se adaptan a tu rutina, de 13:00 a 22:00 hs.',
    },
    {
      icon: Users,
      title: 'Grupos reducidos',
      description: 'Atención personalizada con grupos reducidos para un aprendizaje efectivo.',
    },
  ];
  
  return (
    <section className="py-20 bg-muted/50">
      <div className="container px-4">
        <div className="grid gap-8 md:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="border-2">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="rounded-full bg-primary/10 p-4">
                      <Icon className="h-8 w-8 text-primary" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-semibold">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}


