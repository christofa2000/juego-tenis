import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const reservaSchema = z.object({
  sede: z.enum(["caballito", "nunez"]),
  tipoClase: z.string(),
  nivel: z.string(),
  diaPreferido: z.string(),
  horarioPreferido: z.string(),
  nombre: z.string().min(2),
  telefono: z.string().min(10),
  comentarios: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const validatedData = reservaSchema.parse(body);

    // Aquí iría la lógica para guardar en base de datos
    // Por ahora, solo retornamos éxito
    console.log("Reserva recibida:", validatedData);

    // Simular guardado en base de datos
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json(
      {
        success: true,
        message: "Reserva creada exitosamente",
        data: {
          id: Math.random().toString(36).substr(2, 9),
          ...validatedData,
          createdAt: new Date().toISOString(),
        },
      },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: "Datos inválidos", details: error.issues },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, error: "Error al procesar la reserva" },
      { status: 500 }
    );
  }
}
