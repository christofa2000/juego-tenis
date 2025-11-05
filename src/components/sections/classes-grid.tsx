"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export function ClassesGrid() {
  const classTypes = [
    {
      id: "individual",
      title: "Individuales",
      description: "Clases personalizadas uno a uno para mejorar tu técnica",
      badge: "Popular",
      nivel: "Todos los niveles",
      edad: "Adultos",
    },
    {
      id: "group",
      title: "Grupales",
      description: "Aprende y disfruta en grupo con otros jugadores",
      badge: null,
      nivel: "Todos los niveles",
      edad: "Adultos",
    },
    {
      id: "kids",
      title: "Niños",
      description: "Clases especiales para niños con metodología adaptada",
      badge: "Destacado",
      nivel: "Principiante",
      edad: "Niños",
    },
    {
      id: "beginner",
      title: "Principiantes",
      description: "Perfecto para empezar desde cero",
      badge: null,
      nivel: "Principiante",
      edad: "Todos",
    },
    {
      id: "intermediate",
      title: "Intermedios",
      description: "Para jugadores que ya tienen experiencia",
      badge: null,
      nivel: "Intermedio",
      edad: "Adultos",
    },
    {
      id: "advanced",
      title: "Avanzados",
      description: "Nivel competitivo para mejorar tu juego",
      badge: null,
      nivel: "Avanzado",
      edad: "Adultos",
    },
  ];

  return (
    <section id="clases" className="py-20 scroll-mt-16">
      <div className="container px-4">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Nuestras Clases
          </h2>
          <p className="text-lg text-muted-foreground">Clases adaptadas a tu nivel y objetivos</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {classTypes.map((classType) => (
            <Card key={classType.id} className="flex flex-col">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle>{classType.title}</CardTitle>
                  {classType.badge && (
                    <Badge variant="secondary">{classType.badge}</Badge>
                  )}
                </div>
                <CardDescription>{classType.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 mt-auto">
                <div className="flex gap-2 text-sm text-muted-foreground">
                  <span>{classType.nivel}</span>
                  <span>•</span>
                  <span>{classType.edad}</span>
                </div>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/clases">Ver más</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
