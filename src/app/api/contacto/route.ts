import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  nombre: z.string().min(2),
  email: z.string().email().optional(),
  telefono: z.string().min(10).optional(),
  mensaje: z.string().min(10),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const validatedData = contactSchema.parse(body);

    // Aquí iría la lógica para enviar email o guardar en base de datos
    console.log("Contacto recibido:", validatedData);

    // Simular envío de email
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json(
      {
        success: true,
        message: "Mensaje enviado exitosamente",
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
      { success: false, error: "Error al procesar el mensaje" },
      { status: 500 }
    );
  }
}
