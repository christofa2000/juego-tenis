"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "@/i18n/navigation";
import { Clock, MapPin, Target, Users } from "lucide-react";
import { useTranslations } from "next-intl";

export function ClassesDetail() {
  const t = useTranslations("classes");

  const classDetails = [
    {
      id: "individual",
      title: t("types.individual"),
      description: "Clases personalizadas uno a uno para mejorar tu técnica",
      duracion: "60 minutos",
      foco: "Técnica personalizada",
      grupo: "1 persona",
      sede: "Caballito y Núñez",
      horario: "13:00 - 22:00",
    },
    {
      id: "group",
      title: t("types.group"),
      description: "Aprende y disfruta en grupo con otros jugadores",
      duracion: "90 minutos",
      foco: "Juego en grupo y estrategia",
      grupo: "4-6 personas",
      sede: "Caballito y Núñez",
      horario: "13:00 - 22:00",
    },
    {
      id: "kids",
      title: t("types.kids"),
      description: "Clases especiales para niños con metodología adaptada",
      duracion: "60 minutos",
      foco: "Diversión y aprendizaje",
      grupo: "4-6 niños",
      sede: "Caballito y Núñez",
      horario: "13:00 - 20:00",
    },
    {
      id: "beginner",
      title: t("types.beginner"),
      description: "Perfecto para empezar desde cero",
      duracion: "90 minutos",
      foco: "Fundamentos básicos",
      grupo: "4-6 personas",
      sede: "Caballito y Núñez",
      horario: "13:00 - 22:00",
    },
    {
      id: "intermediate",
      title: t("types.intermediate"),
      description: "Para jugadores que ya tienen experiencia",
      duracion: "90 minutos",
      foco: "Mejora técnica y táctica",
      grupo: "4-6 personas",
      sede: "Caballito y Núñez",
      horario: "13:00 - 22:00",
    },
    {
      id: "advanced",
      title: t("types.advanced"),
      description: "Nivel competitivo para mejorar tu juego",
      duracion: "90 minutos",
      foco: "Perfeccionamiento y competencia",
      grupo: "4-6 personas",
      sede: "Caballito y Núñez",
      horario: "13:00 - 22:00",
    },
  ];

  return (
    <div className="py-20">
      <div className="container px-4">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
              {t("title")}
            </h1>
            <p className="text-lg text-muted-foreground">{t("subtitle")}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {classDetails.map((classDetail) => (
              <Card key={classDetail.id} className="flex flex-col">
                <CardHeader>
                  <CardTitle>{classDetail.title}</CardTitle>
                  <CardDescription>{classDetail.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{classDetail.duracion}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>{classDetail.grupo}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Target className="h-4 w-4 text-muted-foreground" />
                      <span>{classDetail.foco}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{classDetail.sede}</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-sm text-muted-foreground mb-4">
                      Horarios: {classDetail.horario}
                    </p>
                    <Button asChild className="w-full">
                      <Link href="/reservar">Reservar ahora</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
