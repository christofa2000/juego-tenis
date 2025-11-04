'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useUIStore } from '@/store/ui-store';
import { useCreateReserva } from '@/lib/queries';
import { reservaSchema } from '@/lib/schemas';
import type { ReservaFormData } from '@/lib/schemas';

export function ReserveForm() {
  const { setSedePreferida } = useUIStore();
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
  } = useForm<ReservaFormData>({
    resolver: zodResolver(reservaSchema),
  });
  
  const mutation = useCreateReserva();
  
  const onSubmit = async (data: ReservaFormData) => {
    setSedePreferida(data.sede);
    mutation.mutate(data);
  };
  
  const sede = watch('sede');
  const horarios = sede === 'caballito' || sede === 'nunez' 
    ? ['13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
    : [];
  
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
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="sede">Sede *</Label>
              <Select
                onValueChange={(value) => setValue('sede', value as 'caballito' | 'nunez')}
              >
                <SelectTrigger id="sede">
                  <SelectValue placeholder="Selecciona una sede" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="caballito">Caballito</SelectItem>
                  <SelectItem value="nunez">Núñez</SelectItem>
                </SelectContent>
              </Select>
              {errors.sede && (
                <p className="text-sm text-destructive">{errors.sede.message}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="tipoClase">Tipo de clase *</Label>
              <Select
                onValueChange={(value) => setValue('tipoClase', value)}
              >
                <SelectTrigger id="tipoClase">
                  <SelectValue placeholder="Selecciona un tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="individual">Individual</SelectItem>
                  <SelectItem value="group">Grupal</SelectItem>
                  <SelectItem value="kids">Niños</SelectItem>
                </SelectContent>
              </Select>
              {errors.tipoClase && (
                <p className="text-sm text-destructive">{errors.tipoClase.message}</p>
              )}
            </div>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="nivel">Nivel *</Label>
              <Select
                onValueChange={(value) => setValue('nivel', value)}
              >
                <SelectTrigger id="nivel">
                  <SelectValue placeholder="Selecciona un nivel" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Principiante</SelectItem>
                  <SelectItem value="intermediate">Intermedio</SelectItem>
                  <SelectItem value="advanced">Avanzado</SelectItem>
                </SelectContent>
              </Select>
              {errors.nivel && (
                <p className="text-sm text-destructive">{errors.nivel.message}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="diaPreferido">Día preferido *</Label>
              <Select
                onValueChange={(value) => setValue('diaPreferido', value)}
              >
                <SelectTrigger id="diaPreferido">
                  <SelectValue placeholder="Selecciona un día" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="lunes">Lunes</SelectItem>
                  <SelectItem value="martes">Martes</SelectItem>
                  <SelectItem value="miercoles">Miércoles</SelectItem>
                  <SelectItem value="jueves">Jueves</SelectItem>
                  <SelectItem value="viernes">Viernes</SelectItem>
                  <SelectItem value="sabado">Sábado</SelectItem>
                  <SelectItem value="domingo">Domingo</SelectItem>
                </SelectContent>
              </Select>
              {errors.diaPreferido && (
                <p className="text-sm text-destructive">{errors.diaPreferido.message}</p>
              )}
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="horarioPreferido">Horario preferido (13:00 - 22:00) *</Label>
            <Select
              onValueChange={(value) => setValue('horarioPreferido', value)}
              disabled={!sede}
            >
              <SelectTrigger id="horarioPreferido">
                <SelectValue placeholder={sede ? "Selecciona un horario" : "Primero selecciona una sede"} />
              </SelectTrigger>
              <SelectContent>
                {horarios.map((horario) => (
                  <SelectItem key={horario} value={horario}>
                    {horario}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.horarioPreferido && (
              <p className="text-sm text-destructive">{errors.horarioPreferido.message}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="nombre">Nombre completo *</Label>
            <Input
              id="nombre"
              {...register('nombre')}
              placeholder="Juan Pérez"
            />
            {errors.nombre && (
              <p className="text-sm text-destructive">{errors.nombre.message}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="telefono">Teléfono/WhatsApp *</Label>
            <Input
              id="telefono"
              type="tel"
              {...register('telefono')}
              placeholder="11 1234-5678"
            />
            {errors.telefono && (
              <p className="text-sm text-destructive">{errors.telefono.message}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="comentarios">Comentarios adicionales</Label>
            <Textarea
              id="comentarios"
              {...register('comentarios')}
              placeholder="Comentarios adicionales..."
              rows={4}
            />
          </div>
          
          <Button type="submit" className="w-full" disabled={isSubmitting || mutation.isPending}>
            {isSubmitting || mutation.isPending ? 'Enviando...' : 'Enviar solicitud'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

