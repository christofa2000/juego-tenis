"use client";

import { CtaWhatsapp } from "@/components/cta-whatsapp";
import { Instagram, MapPin, Phone, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Image
              src="/brand/logo-dark.jpeg"
              alt="Juegotenis"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
            <p className="text-sm text-muted-foreground">
              Clases de tenis en Caballito y Núñez. Metodología con grupos
              reducidos y acompañamiento cercano.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Enlaces</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/clases"
                  className="text-muted-foreground hover:text-primary"
                >
                  Clases
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonios"
                  className="text-muted-foreground hover:text-primary"
                >
                  Testimonios
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-muted-foreground hover:text-primary"
                >
                  Contacto
                </Link>
              </li>
              <li>
                <Link
                  href="/reservar"
                  className="text-muted-foreground hover:text-primary"
                >
                  Reservar
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Contacto</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                11 2311-0735
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                Caballito y Núñez, Buenos Aires
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Redes Sociales</h3>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/juegotenis"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Juegotenis"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com/@juegotenis"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube de Juegotenis"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
            <CtaWhatsapp variant="outline" size="sm" />
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Juegotenis. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
