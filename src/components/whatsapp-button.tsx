'use client';

import { MessageCircle } from 'lucide-react';
import { Button, ButtonProps } from '@/components/ui/button';

interface WhatsAppButtonProps extends Omit<ButtonProps, 'onClick'> {
  phone?: string;
  message?: string;
}

export function WhatsAppButton({ 
  phone = '5491123110735',
  message,
  ...props 
}: WhatsAppButtonProps) {
  const defaultMessage = message || 'Hola, me interesa conocer más sobre las clases de tenis';
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(defaultMessage)}`;
  
  return (
    <Button
      asChild
      {...props}
      className="bg-[#25D366] hover:bg-[#25D366]/90 text-white"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-4 w-4" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    </Button>
  );
}



