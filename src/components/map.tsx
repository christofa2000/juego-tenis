"use client";

import { useEffect, useRef, useState } from "react";

interface Location {
  name: string;
  address: string;
  lat: number;
  lng: number;
  embedUrl: string;
}

// Generar URL de embed de Google Maps basada en coordenadas y dirección
const generateMapUrl = (lat: number, lng: number, address: string): string => {
  const encodedAddress = encodeURIComponent(address);
  return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.2!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM3JzA2LjYiUyA1OMKwMjYnMDEuNyJX!5e0!3m2!1ses!2sar!4v1234567890&q=${encodedAddress}`;
};

const locations: Location[] = [
  {
    name: "Caballito",
    address: "Doblás 1043, Caballito, Buenos Aires",
    lat: -34.6185,
    lng: -58.4338,
    embedUrl: generateMapUrl(
      -34.6185,
      -58.4338,
      "Doblás 1043, Caballito, Buenos Aires"
    ),
  },
  {
    name: "Núñez",
    address: "Av. del Libertador 7208, C1429 Cdad. Autónoma de Buenos Aires",
    lat: -34.5548,
    lng: -58.4656,
    embedUrl: generateMapUrl(
      -34.5548,
      -58.4656,
      "Av. del Libertador 7208, C1429 Cdad. Autónoma de Buenos Aires"
    ),
  },
];

export default function Map() {
  const [selectedLocation, setSelectedLocation] = useState<Location>(
    locations[0]
  );
  const mapRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Limpiar iframe anterior si existe
    if (iframeRef.current && iframeRef.current.parentNode) {
      iframeRef.current.parentNode.removeChild(iframeRef.current);
    }

    // Crear nuevo iframe con la ubicación seleccionada
    const iframe = document.createElement("iframe");
    iframe.src = selectedLocation.embedUrl;
    iframe.width = "100%";
    iframe.height = "400";
    iframe.style.border = "0";
    iframe.setAttribute("allowFullScreen", "true");
    iframe.loading = "lazy";
    iframe.referrerPolicy = "no-referrer-when-downgrade";
    iframe.title = `Juegotenis - Sede ${selectedLocation.name}`;

    mapRef.current.appendChild(iframe);
    iframeRef.current = iframe;

    return () => {
      if (iframeRef.current && iframeRef.current.parentNode) {
        iframeRef.current.parentNode.removeChild(iframeRef.current);
      }
    };
  }, [selectedLocation]);

  return (
    <div className="space-y-4">
      {/* Botones de selección de sede */}
      <div className="flex gap-3 justify-center flex-wrap">
        {locations.map((location) => (
          <button
            key={location.name}
            onClick={() => setSelectedLocation(location)}
            className={`px-6 py-3 rounded-full font-medium transition-all ${
              selectedLocation.name === location.name
                ? "bg-primary text-primary-foreground shadow-md"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
            aria-label={`Ver mapa de Sede ${location.name}`}
            aria-pressed={selectedLocation.name === location.name}
          >
            Sede {location.name}
          </button>
        ))}
      </div>

      {/* Información de la sede seleccionada */}
      <div className="text-center space-y-2">
        <h3 className="text-lg font-semibold">Sede {selectedLocation.name}</h3>
        <p className="text-sm text-muted-foreground">
          {selectedLocation.address}
        </p>
      </div>

      {/* Mapa */}
      <div
        ref={mapRef}
        className="h-[400px] w-full rounded-lg overflow-hidden border"
        aria-label={`Mapa de Sede ${selectedLocation.name}`}
      />
    </div>
  );
}
