// src/app/app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router'; // Configuración del enrutamiento
import { provideHttpClient, withFetch } from '@angular/common/http'; // Cliente HTTP con soporte para Fetch API
import { provideClientHydration } from '@angular/platform-browser'; // Hidratación del cliente (para SSR opcional)

import { routes } from './app.routes'; // Archivo de rutas de la aplicación

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(),provideHttpClient(withFetch())]
};


/* Configuración de la aplicación Angular
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),           // Configura las rutas para la navegación
    provideClientHydration(),        // Habilita la hidratación del cliente (útil para SSR, se puede omitir si no usas SSR)
    provideHttpClient(withFetch())   // Configura el cliente HTTP con soporte para Fetch API (más moderno que XMLHttpRequest)
  ]};

*/