import { useMutation } from '@tanstack/react-query';
import { useToast } from '@/hooks/use-toast';

export interface ReservaData {
  sede: 'caballito' | 'nunez';
  tipoClase: string;
  nivel: string;
  diaPreferido: string;
  horarioPreferido: string;
  nombre: string;
  telefono: string;
  comentarios?: string;
}

export interface ContactoData {
  nombre: string;
  email?: string;
  telefono?: string;
  mensaje: string;
}

async function createReserva(data: ReservaData) {
  const response = await fetch('/api/reservas', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Error al crear la reserva');
  }
  
  return response.json();
}

async function sendContacto(data: ContactoData) {
  const response = await fetch('/api/contacto', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Error al enviar el mensaje');
  }
  
  return response.json();
}

export function useCreateReserva() {
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: createReserva,
    onSuccess: () => {
      toast({
        title: '¡Reserva enviada!',
        description: 'Nos pondremos en contacto contigo pronto.',
      });
    },
    onError: (error: Error) => {
      toast({
        title: 'Error',
        description: error.message || 'Hubo un error al enviar tu reserva. Por favor, intenta nuevamente.',
        variant: 'destructive',
      });
    },
  });
}

export function useSendContacto() {
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: sendContacto,
    onSuccess: () => {
      toast({
        title: '¡Mensaje enviado!',
        description: 'Te responderemos pronto.',
      });
    },
    onError: (error: Error) => {
      toast({
        title: 'Error',
        description: error.message || 'Hubo un error al enviar tu mensaje. Por favor, intenta nuevamente.',
        variant: 'destructive',
      });
    },
  });
}


