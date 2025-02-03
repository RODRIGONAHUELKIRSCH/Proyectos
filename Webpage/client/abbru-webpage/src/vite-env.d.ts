/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_MODE: string;
  VITE_API_URL: string;
  VITE_GOOGLE_MAPS_API_KEY: string;
  // Puedes añadir más variables de entorno aquí
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}