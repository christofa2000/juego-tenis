import { describe, it, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { Hero } from '@/components/sections/hero';
import { NextIntlClientProvider } from 'next-intl';
import messages from '../../../messages/es.json';

describe('Hero Component', () => {
  it('debe renderizar el título principal', () => {
    render(
      <NextIntlClientProvider messages={messages} locale="es">
        <Hero />
      </NextIntlClientProvider>
    );

    const title = screen.getByRole('heading', { level: 1 });
    expect(title).toBeInTheDocument();
  });

  it('debe renderizar los botones de CTA', () => {
    render(
      <NextIntlClientProvider messages={messages} locale="es">
        <Hero />
      </NextIntlClientProvider>
    );

    const buttons = screen.getAllByRole('link');
    expect(buttons.length).toBeGreaterThan(0);
  });
});


