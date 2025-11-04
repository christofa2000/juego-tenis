'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { contactSchema, type ContactFormData } from '@/lib/schemas';
import { useSendContacto } from '@/lib/queries';

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });
  
  const mutation = useSendContacto();
  
  const onSubmit = async (data: ContactFormData) => {
    mutation.mutate(data);
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="contact-nombre">Nombre *</Label>
        <Input
          id="contact-nombre"
          {...register('nombre')}
          placeholder="Juan Pérez"
        />
        {errors.nombre && (
          <p className="text-sm text-destructive">{errors.nombre.message}</p>
        )}
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="contact-email">Email</Label>
        <Input
          id="contact-email"
          type="email"
          {...register('email')}
          placeholder="juan@example.com"
        />
        {errors.email && (
          <p className="text-sm text-destructive">{errors.email.message}</p>
        )}
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="contact-telefono">Teléfono</Label>
        <Input
          id="contact-telefono"
          type="tel"
          {...register('telefono')}
          placeholder="11 1234-5678"
        />
        {errors.telefono && (
          <p className="text-sm text-destructive">{errors.telefono.message}</p>
        )}
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="contact-mensaje">Mensaje *</Label>
        <Textarea
          id="contact-mensaje"
          {...register('mensaje')}
          placeholder="Escribe tu mensaje..."
          rows={5}
        />
        {errors.mensaje && (
          <p className="text-sm text-destructive">{errors.mensaje.message}</p>
        )}
      </div>
      
      <Button type="submit" className="w-full" disabled={isSubmitting || mutation.isPending}>
        {isSubmitting || mutation.isPending ? 'Enviando...' : 'Enviar mensaje'}
      </Button>
    </form>
  );
}


