"use client";

import { CtaWhatsapp } from "@/components/cta-whatsapp";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CTA() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container px-4">
        <div className="mx-auto max-w-2xl text-center space-y-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            ¿Listo para empezar?
          </h2>
          <p className="text-lg text-primary-foreground/90">
            Reserva tu clase hoy y comienza tu camino en el tenis
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto"
            >
              <Link href="/reservar">Reservar mi clase</Link>
            </Button>
            <CtaWhatsapp
              size="lg"
              variant="outline"
              className="w-full sm:w-auto bg-background/10 hover:bg-background/20 border-background/20 text-primary-foreground"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
