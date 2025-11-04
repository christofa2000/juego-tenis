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
        <div className="mx-auto max-w-3xl text-center space-y-8">
          <div className="flex justify-center mb-8">
            <Image
              src="/brand/logo-light.jpg"
              alt="Juegotenis"
              width={200}
              height={80}
              className="h-20 w-auto"
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

          {/* Opcional: Video corto */}
          <div className="mt-12 rounded-lg overflow-hidden shadow-lg">
            <video
              className="w-full h-auto"
              poster="/brand/ad-1.png"
              controls
              preload="metadata"
              aria-label="Video promocional de Juegotenis"
            >
              <source src="/videos/promocional.mp4" type="video/mp4" />
              <p>Tu navegador no soporta videos HTML5.</p>
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
