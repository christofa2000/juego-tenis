'use client';

import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const reservationSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  phone: z.string().min(10, 'El teléfono debe tener al menos 10 caracteres'),
  classType: z.string().min(1, 'Selecciona un tipo de clase'),
  location: z.string().min(1, 'Selecciona una ubicación'),
  preferredTime: z.string().optional(),
  message: z.string().optional(),
});

type ReservationFormData = z.infer<typeof reservationSchema>;

export function ReservationForm() {
  const t = useTranslations('common');
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
  } = useForm<ReservationFormData>({
    resolver: zodResolver(reservationSchema),
  });
  
  const onSubmit = async (data: ReservationFormData) => {
    try {
      // Aquí iría la lógica para enviar el formulario
      console.log('Reservation data:', data);
      alert('¡Gracias! Nos pondremos en contacto contigo pronto.');
    } catch (error) {
      console.error('Error submitting reservation:', error);
      alert('Hubo un error. Por favor, intenta nuevamente.');
    }
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Formulario de Reserva</CardTitle>
        <CardDescription>
          Completa los datos y nos pondremos en contacto contigo para confirmar tu clase
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Nombre completo *</Label>
            <Input
              id="name"
              {...register('name')}
              placeholder="Juan Pérez"
            />
            {errors.name && (
              <p className="text-sm text-destructive">{errors.name.message}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              {...register('email')}
              placeholder="juan@example.com"
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Teléfono *</Label>
            <Input
              id="phone"
              type="tel"
              {...register('phone')}
              placeholder="11 1234-5678"
            />
            {errors.phone && (
              <p className="text-sm text-destructive">{errors.phone.message}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="classType">Tipo de clase *</Label>
            <Select
              onValueChange={(value) => setValue('classType', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecciona un tipo de clase" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="individual">Individual</SelectItem>
                <SelectItem value="group">Grupal</SelectItem>
                <SelectItem value="kids">Niños</SelectItem>
                <SelectItem value="beginner">Principiante</SelectItem>
                <SelectItem value="intermediate">Intermedio</SelectItem>
                <SelectItem value="advanced">Avanzado</SelectItem>
              </SelectContent>
            </Select>
            {errors.classType && (
              <p className="text-sm text-destructive">{errors.classType.message}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="location">Ubicación *</Label>
            <Select
              onValueChange={(value) => setValue('location', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecciona una ubicación" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="caballito">Caballito</SelectItem>
                <SelectItem value="nunez">Núñez</SelectItem>
              </SelectContent>
            </Select>
            {errors.location && (
              <p className="text-sm text-destructive">{errors.location.message}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="preferredTime">Horario preferido</Label>
            <Input
              id="preferredTime"
              {...register('preferredTime')}
              placeholder="Ej: Lunes 18:00"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">Mensaje adicional</Label>
            <Textarea
              id="message"
              {...register('message')}
              placeholder="Comentarios adicionales..."
              rows={4}
            />
          </div>
          
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? 'Enviando...' : 'Enviar solicitud'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}



