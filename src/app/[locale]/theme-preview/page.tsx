'use client';

import { useState } from 'react';
import Image from 'next/image';
import { TreePine, Clock, Users, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ThemeToggle } from '@/components/theme-toggle';

export default function ThemePreviewPage() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    // Aplicar clase al document
    if (!isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark 
        ? 'bg-[#0D0D0D] text-[#E5E5E5]' 
        : 'bg-white text-[#111111]'
    }`}>
      <div className="container mx-auto px-4 sm:px-8 py-20">
        {/* Header con toggle */}
        <div className="flex justify-end mb-12">
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 px-4 py-2 rounded-full border transition-colors hover:bg-opacity-10"
            style={{
              borderColor: isDark ? '#FF8647' : '#FF8647',
              backgroundColor: isDark ? 'rgba(255, 134, 71, 0.1)' : 'rgba(255, 134, 71, 0.05)',
            }}
            aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
          >
            {isDark ? (
              <>
                <Sun className="h-5 w-5 text-[#FF8647]" />
                <span className="text-sm font-medium">Modo Claro</span>
              </>
            ) : (
              <>
                <Moon className="h-5 w-5 text-[#FF8647]" />
                <span className="text-sm font-medium">Modo Oscuro</span>
              </>
            )}
          </button>
        </div>

        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center space-y-8 mb-20">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            {isDark ? (
              <Image
                src="/brand/logo-light.jpg"
                alt="Juegotenis"
                width={200}
                height={80}
                className="h-20 w-auto"
                priority
              />
            ) : (
              <Image
                src="/brand/logo-dark.jpg"
                alt="Juegotenis"
                width={200}
                height={80}
                className="h-20 w-auto"
                priority
              />
            )}
          </div>

          {/* Título */}
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight"
            style={{
              color: isDark ? '#E5E5E5' : '#111111',
            }}
          >
            Clases de tenis en Caballito y Núñez
          </h1>

          {/* Subtítulo */}
          <p 
            className="text-xl sm:text-2xl max-w-2xl mx-auto"
            style={{
              color: isDark ? '#A0A0A0' : '#444444',
            }}
          >
            Metodología con grupos reducidos y acompañamiento cercano.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button
              size="lg"
              className="rounded-full px-8 py-6 text-base font-medium transition-all hover:scale-105"
              style={{
                backgroundColor: '#FF8647',
                color: '#FFFFFF',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#E75E1E';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#FF8647';
              }}
            >
              Reservar clase
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 py-6 text-base font-medium transition-all hover:scale-105"
              style={{
                borderColor: '#FF8647',
                color: '#FF8647',
                backgroundColor: 'transparent',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = isDark ? 'rgba(255, 134, 71, 0.1)' : 'rgba(255, 134, 71, 0.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              WhatsApp
            </Button>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="max-w-6xl mx-auto">
          <h2 
            className="text-3xl sm:text-4xl font-semibold text-center mb-12"
            style={{
              color: isDark ? '#E5E5E5' : '#111111',
            }}
          >
            Beneficios
          </h2>
          
          <div className="grid gap-6 md:grid-cols-3">
            {/* Beneficio 1 */}
            <Card 
              className="border-2 transition-all hover:shadow-lg"
              style={{
                backgroundColor: isDark ? '#1A1A1A' : '#F9FAFB',
                borderColor: isDark ? 'rgba(255, 134, 71, 0.2)' : 'rgba(255, 134, 71, 0.1)',
              }}
            >
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div 
                    className="rounded-full p-4"
                    style={{
                      backgroundColor: isDark ? 'rgba(255, 134, 71, 0.2)' : 'rgba(255, 134, 71, 0.1)',
                    }}
                  >
                    <TreePine 
                      className="h-8 w-8"
                      style={{ color: '#FF8647' }}
                    />
                  </div>
                  <h3 
                    className="text-xl font-semibold"
                    style={{
                      color: isDark ? '#E5E5E5' : '#111111',
                    }}
                  >
                    Clases en un gran predio verde
                  </h3>
                  <p 
                    className="text-sm"
                    style={{
                      color: isDark ? '#A0A0A0' : '#444444',
                    }}
                  >
                    Disfruta de espacios naturales y canchas en excelente estado
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Beneficio 2 */}
            <Card 
              className="border-2 transition-all hover:shadow-lg"
              style={{
                backgroundColor: isDark ? '#1A1A1A' : '#F9FAFB',
                borderColor: isDark ? 'rgba(255, 134, 71, 0.2)' : 'rgba(255, 134, 71, 0.1)',
              }}
            >
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div 
                    className="rounded-full p-4"
                    style={{
                      backgroundColor: isDark ? 'rgba(255, 134, 71, 0.2)' : 'rgba(255, 134, 71, 0.1)',
                    }}
                  >
                    <Clock 
                      className="h-8 w-8"
                      style={{ color: '#FF8647' }}
                    />
                  </div>
                  <h3 
                    className="text-xl font-semibold"
                    style={{
                      color: isDark ? '#E5E5E5' : '#111111',
                    }}
                  >
                    Horarios centrales disponibles
                  </h3>
                  <p 
                    className="text-sm"
                    style={{
                      color: isDark ? '#A0A0A0' : '#444444',
                    }}
                  >
                    Flexibilidad de 13:00 a 22:00 para adaptarse a tu rutina
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Beneficio 3 */}
            <Card 
              className="border-2 transition-all hover:shadow-lg"
              style={{
                backgroundColor: isDark ? '#1A1A1A' : '#F9FAFB',
                borderColor: isDark ? 'rgba(255, 134, 71, 0.2)' : 'rgba(255, 134, 71, 0.1)',
              }}
            >
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div 
                    className="rounded-full p-4"
                    style={{
                      backgroundColor: isDark ? 'rgba(255, 134, 71, 0.2)' : 'rgba(255, 134, 71, 0.1)',
                    }}
                  >
                    <Users 
                      className="h-8 w-8"
                      style={{ color: '#FF8647' }}
                    />
                  </div>
                  <h3 
                    className="text-xl font-semibold"
                    style={{
                      color: isDark ? '#E5E5E5' : '#111111',
                    }}
                  >
                    Grupos reducidos
                  </h3>
                  <p 
                    className="text-sm"
                    style={{
                      color: isDark ? '#A0A0A0' : '#444444',
                    }}
                  >
                    Atención personalizada para un aprendizaje efectivo
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Color Palette Preview */}
        <div className="max-w-4xl mx-auto mt-20">
          <h2 
            className="text-3xl sm:text-4xl font-semibold text-center mb-12"
            style={{
              color: isDark ? '#E5E5E5' : '#111111',
            }}
          >
            Paleta de Colores
          </h2>
          
          <div className="grid gap-4 md:grid-cols-3">
            {/* Brand */}
            <div className="space-y-2">
              <h3 
                className="text-sm font-medium"
                style={{
                  color: isDark ? '#A0A0A0' : '#444444',
                }}
              >
                Brand
              </h3>
              <div className="flex gap-2">
                <div 
                  className="w-16 h-16 rounded-lg"
                  style={{ backgroundColor: '#FF8647' }}
                />
                <div 
                  className="w-16 h-16 rounded-lg"
                  style={{ backgroundColor: isDark ? '#FF6A1F' : '#E75E1E' }}
                />
              </div>
            </div>

            {/* Neutral */}
            <div className="space-y-2">
              <h3 
                className="text-sm font-medium"
                style={{
                  color: isDark ? '#A0A0A0' : '#444444',
                }}
              >
                Neutral
              </h3>
              <div className="flex gap-2">
                <div 
                  className="w-16 h-16 rounded-lg"
                  style={{ backgroundColor: isDark ? '#1A1A1A' : '#F9FAFB' }}
                />
                <div 
                  className="w-16 h-16 rounded-lg"
                  style={{ backgroundColor: isDark ? '#0D0D0D' : '#111111' }}
                />
              </div>
            </div>

            {/* Accent */}
            <div className="space-y-2">
              <h3 
                className="text-sm font-medium"
                style={{
                  color: isDark ? '#A0A0A0' : '#444444',
                }}
              >
                Accent
              </h3>
              <div className="flex gap-2">
                <div 
                  className="w-16 h-16 rounded-lg"
                  style={{ backgroundColor: isDark ? '#50C878' : '#3BAF4A' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

