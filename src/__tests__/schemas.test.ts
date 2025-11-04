import { describe, it, expect } from '@jest/globals';
import { reservaSchema, contactSchema } from '@/lib/schemas';

describe('Reserva Schema', () => {
  it('debe validar una reserva válida', () => {
    const validReserva = {
      sede: 'caballito' as const,
      tipoClase: 'individual',
      nivel: 'beginner',
      diaPreferido: 'lunes',
      horarioPreferido: '14:00',
      nombre: 'Juan Pérez',
      telefono: '1123456789',
      comentarios: 'Comentario opcional',
    };

    const result = reservaSchema.safeParse(validReserva);
    expect(result.success).toBe(true);
  });

  it('debe rechazar una reserva sin sede', () => {
    const invalidReserva = {
      tipoClase: 'individual',
      nivel: 'beginner',
      diaPreferido: 'lunes',
      horarioPreferido: '14:00',
      nombre: 'Juan Pérez',
      telefono: '1123456789',
    };

    const result = reservaSchema.safeParse(invalidReserva);
    expect(result.success).toBe(false);
  });

  it('debe rechazar una reserva con nombre muy corto', () => {
    const invalidReserva = {
      sede: 'caballito' as const,
      tipoClase: 'individual',
      nivel: 'beginner',
      diaPreferido: 'lunes',
      horarioPreferido: '14:00',
      nombre: 'J',
      telefono: '1123456789',
    };

    const result = reservaSchema.safeParse(invalidReserva);
    expect(result.success).toBe(false);
  });
});

describe('Contact Schema', () => {
  it('debe validar un contacto válido con email', () => {
    const validContact = {
      nombre: 'Juan Pérez',
      email: 'juan@example.com',
      mensaje: 'Este es un mensaje de prueba',
    };

    const result = contactSchema.safeParse(validContact);
    expect(result.success).toBe(true);
  });

  it('debe validar un contacto válido con teléfono', () => {
    const validContact = {
      nombre: 'Juan Pérez',
      telefono: '1123456789',
      mensaje: 'Este es un mensaje de prueba',
    };

    const result = contactSchema.safeParse(validContact);
    expect(result.success).toBe(true);
  });

  it('debe rechazar un contacto con mensaje muy corto', () => {
    const invalidContact = {
      nombre: 'Juan Pérez',
      email: 'juan@example.com',
      mensaje: 'Corto',
    };

    const result = contactSchema.safeParse(invalidContact);
    expect(result.success).toBe(false);
  });
});


