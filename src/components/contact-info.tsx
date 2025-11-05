"use client";

import { Card, CardContent } from "@/components/ui/card";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { Clock, MapPin, Phone } from "lucide-react";

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Teléfono</h3>
                <p className="text-muted-foreground">11 2311-0735</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold mb-1">Ubicación</h3>
                <div className="space-y-2">
                  <div>
                    <p className="font-medium text-sm mb-1">Sede Caballito</p>
                    <p className="text-sm text-muted-foreground">
                      Doblás 1043, Caballito, Buenos Aires
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-sm mb-1">Sede Núñez</p>
                    <p className="text-sm text-muted-foreground">
                      Av. del Libertador 7208, C1429 Cdad. Autónoma de Buenos
                      Aires
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Horarios</h3>
                <p className="text-muted-foreground">
                  Lunes a Viernes: 13:00 - 22:00
                </p>
                <p className="text-muted-foreground">Sábados: 9:00 - 18:00</p>
              </div>
            </div>

            <div className="pt-4">
              <WhatsAppButton className="w-full" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
