import { z } from 'zod';

export const reservaSchema = z.object({
  sede: z.enum(['caballito', 'nunez'], {
    message: 'Selecciona una sede',
  }),
  tipoClase: z.string().min(1, 'Selecciona un tipo de clase'),
  nivel: z.string().min(1, 'Selecciona un nivel'),
  diaPreferido: z.string().min(1, 'Selecciona un día'),
  horarioPreferido: z.string().min(1, 'Selecciona un horario'),
  nombre: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  telefono: z.string().min(10, 'El teléfono debe tener al menos 10 caracteres'),
  comentarios: z.string().optional(),
});

export const contactSchema = z.object({
  nombre: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido').optional().or(z.literal('')),
  telefono: z.string().min(10, 'El teléfono debe tener al menos 10 caracteres').optional().or(z.literal('')),
  mensaje: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
});

export type ReservaFormData = z.infer<typeof reservaSchema>;
export type ContactFormData = z.infer<typeof contactSchema>;


