"use client";

import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";

export function Header() {
  const t = useTranslations("common");

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/brand/logo-dark.jpeg"
            alt="Juegotenis"
            width={120}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/#clases"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Clases
          </Link>
          <Link
            href="/#testimonios"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Testimonios
          </Link>
          <Link
            href="/#ubicacion"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Ubicación
          </Link>
          <Link
            href="/contacto"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            {t("contact")}
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <WhatsAppButton variant="outline" size="sm" />
          <Button asChild size="sm">
            <Link href="/reservar">Reservar clase</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
