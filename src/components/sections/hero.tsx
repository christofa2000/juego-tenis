"use client";

import { CtaWhatsapp } from "@/components/cta-whatsapp";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";

export function Hero() {
  const t = useTranslations("home");

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20 py-20 md:py-32">
      <div className="container px-4">
        <div className="mx-auto max-w-4xl text-center space-y-8">
          {/* Imagen principal */}
          <div className="flex justify-center mb-8">
            <Image
              src="/brand/hero.png"
              alt="Juegotenis - Clases de tenis"
              width={1200}
              height={600}
              className="w-full h-auto rounded-lg shadow-lg"
              priority
            />
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            {t("title")}
          </h1>
          <p className="text-xl text-muted-foreground sm:text-2xl">
            {t("subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/reservar">{t("cta.primary")}</Link>
            </Button>
            <CtaWhatsapp
              size="lg"
              variant="outline"
              className="w-full sm:w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
