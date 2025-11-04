"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface CtaWhatsappProps extends Omit<ButtonProps, "onClick"> {
  phone?: string;
  message?: string;
  utmSource?: string;
  floating?: boolean;
  /** Personaliza la posición cuando es flotante */
  offset?: { bottom?: number; right?: number };
}

export function CtaWhatsapp({
  phone = "5491123110735",
  message,
  utmSource = "website",
  floating = false,
  className,
  offset,
  ...props
}: CtaWhatsappProps) {
  const t = useTranslations("common");
  const tContact = useTranslations("contact");
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const defaultMessage = message || tContact("whatsappMessage");
  const utmParams = `utm_source=${utmSource}&utm_medium=whatsapp&utm_campaign=contact`;
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
    defaultMessage
  )}&${utmParams}`;

  // Botón “normal” (no flotante)
  if (!floating) {
    return (
      <Button
        asChild
        {...props}
        className={cn(
          "bg-[#25D366] hover:bg-[#25D366]/90 text-white",
          className
        )}
        aria-label={t("whatsapp")}
      >
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          <MessageCircle className="h-4 w-4" />
          <span className="hidden sm:inline">{t("whatsapp")}</span>
        </a>
      </Button>
    );
  }

  // Botón flotante con portal al body (evita clipping por transforms/overflow)
  const bottom = (offset?.bottom ?? 16) + 0; // px base (16 = 1rem)
  const right = (offset?.right ?? 16) + 0;

  const Floating = (
    <div
      // z altísimo para pasar cualquier overlay; safe-area para iOS/Android
      className={cn(
        "fixed z-[9999]",
        // safe-area: sumamos env() a bottom/right
        // usamos style para calc con CSS vars
        className
      )}
      style={{
        bottom: `calc(${bottom}px + env(safe-area-inset-bottom))`,
        right: `calc(${right}px + env(safe-area-inset-right))`,
      }}
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t("whatsapp")}
        className={cn(
          "inline-flex items-center justify-center rounded-full h-14 w-14",
          "bg-[#25D366] text-white shadow-xl transition-transform",
          "hover:scale-[1.04] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
        )}
      >
        <MessageCircle className="h-6 w-6" strokeWidth={2} />
      </a>
    </div>
  );

  // Evitar SSR mismatch
  if (!mounted || typeof document === "undefined") return null;

  return createPortal(Floating, document.body);
}
