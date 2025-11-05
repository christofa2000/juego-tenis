'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'María González',
      role: 'Madre de alumno',
      content: 'Mi hijo está muy contento con las clases. Los profesores son muy pacientes y el ambiente es excelente.',
      rating: 5,
    },
    {
      name: 'Carlos Rodríguez',
      role: 'Alumno adulto',
      content: 'Llevo 6 meses en las clases grupales y he mejorado mucho. Los grupos reducidos permiten atención personalizada.',
      rating: 5,
    },
    {
      name: 'Ana Martínez',
      role: 'Alumna principiante',
      content: 'Empecé desde cero y en poco tiempo ya estoy jugando partidos. La metodología es muy clara y efectiva.',
      rating: 5,
    },
    {
      name: 'Roberto Fernández',
      role: 'Alumno avanzado',
      content: 'Las clases de nivel avanzado son muy desafiantes. He mejorado significativamente mi juego competitivo.',
      rating: 5,
    },
  ];
  
  return (
    <section id="testimonios" className="py-20 bg-muted/50 scroll-mt-16">
      <div className="container px-4">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Lo que dicen nuestros alumnos
          </h2>
          <p className="text-lg text-muted-foreground">
            Testimonios de la comunidad Juegotenis
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex gap-1" aria-label={`${testimonial.rating} estrellas`}>
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" aria-hidden="true" />
                    ))}
                  </div>
                  <p className="text-muted-foreground">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
