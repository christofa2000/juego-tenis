'use client';

import { useTranslations } from 'next-intl';
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
  const t = useTranslations('common');
  const tContact = useTranslations('contact');
  
  const defaultMessage = message || tContact('whatsappMessage');
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
        aria-label={t('whatsapp')}
      >
        <MessageCircle className="h-4 w-4" />
        <span className="hidden sm:inline">{t('whatsapp')}</span>
      </a>
    </Button>
  );
}



