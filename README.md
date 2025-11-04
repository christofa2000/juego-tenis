# Juegotenis - Sitio Web

Sitio web de la escuela de tenis Juegotenis, desarrollado con Next.js 16, TypeScript, Tailwind CSS y shadcn/ui.

## Características

- ✅ Next.js 16 con App Router
- ✅ TypeScript con tipado estricto
- ✅ Internacionalización (i18n) con next-intl (español)
- ✅ Tailwind CSS + shadcn/ui + Radix UI
- ✅ SEO optimizado (metadata, OpenGraph, JSON-LD)
- ✅ Responsive y mobile-first
- ✅ Accesibilidad WCAG AA
- ✅ TanStack React Query para estado del servidor
- ✅ React Hook Form + Zod para formularios
- ✅ CTAs prioritarios: WhatsApp y Reservar clase

## Estructura del Proyecto

```
src/
├── app/
│   ├── [locale]/          # Rutas con i18n
│   │   ├── layout.tsx     # Layout principal con i18n
│   │   ├── page.tsx       # Página principal
│   │   ├── reservar/      # Página de reservas
│   │   ├── contacto/      # Página de contacto
│   │   └── clases/        # Página de clases
│   ├── layout.tsx         # Root layout (redirección)
│   └── providers.tsx      # Providers (React Query)
├── components/
│   ├── ui/                # Componentes shadcn/ui
│   ├── sections/          # Secciones de la página principal
│   ├── header.tsx         # Header con navegación
│   ├── footer.tsx         # Footer
│   ├── whatsapp-button.tsx
│   ├── reservation-form.tsx
│   └── contact-form.tsx
├── i18n/
│   ├── config.ts          # Configuración next-intl
│   ├── routing.ts         # Configuración de rutas
│   └── navigation.ts      # Navegación con i18n
└── lib/
    └── utils.ts           # Utilidades

messages/
└── es.json               # Traducciones en español

public/
└── brand/                # Assets de marca (logo, banners)
```

## Configuración

1. **Variables de entorno**: Copia `.env.example` a `.env.local` y configura:

   ```bash
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   NEXT_PUBLIC_WHATSAPP_PHONE=5491123110735
   ```

2. **Assets de marca**: Coloca los siguientes archivos en `public/brand/`:

   - `logo-dark.jpg` - Logo oscuro
   - `logo-light.jpg` - Logo claro
   - `ad-1.png` - Banner 1
   - `ad-2.png` - Banner 2

3. **Instalación de dependencias**:

   ```bash
   npm install
   ```

4. **Ejecutar en desarrollo**:

   ```bash
   npm run dev
   ```

5. **Build para producción**:
   ```bash
   npm run build
   ```

## Páginas

- **/** - Página principal con Hero, Features, Clases, Testimonios, Ubicación y CTA
- **/reservar** - Formulario de reserva de clases
- **/contacto** - Información de contacto y formulario
- **/clases** - Listado de tipos de clases

## CTAs Principales

1. **WhatsApp** - Botón verde (#25D366) con mensaje predefinido
2. **Reservar clase** - Botón principal que lleva al formulario de reserva
3. **Ver clases** - Enlaces a la sección de clases
4. **Leer más** - Enlaces a información adicional

## SEO y Performance

- Metadata optimizada por página
- OpenGraph tags para redes sociales
- JSON-LD para datos estructurados
- Imágenes optimizadas con next/image
- Paleta de colores: naranja primario (#FF8647)
- Mobile-first responsive design

## Tecnologías

- **Framework**: Next.js 16
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS 4
- **UI**: shadcn/ui + Radix UI
- **i18n**: next-intl
- **Formularios**: React Hook Form + Zod
- **Estado**: TanStack React Query + Zustand
- **Iconos**: Lucide React

## Licencia

Copyright © 2025 Juegotenis. Todos los derechos reservados.
"# juego-tenis" 
