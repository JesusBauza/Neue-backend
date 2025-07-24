// ./config/plugins.ts

// Define la forma del parámetro de entrada, específicamente la función `env`.
interface StrapiEnv {
  env: (key: string, defaultValue?: any) => any; // Usamos 'any' para más flexibilidad
}

// Define la estructura de la configuración de carga (upload).
interface UploadConfig {
  config: {
    provider: string;
    providerOptions: {
      cloud_name: string;
      api_key: string;
      api_secret: string;
    };
    actionOptions: object;
  };
}

// --- NUEVO: Define la estructura para users-permissions ---
interface UsersPermissionsConfig {
  config: {
    jwtSecret: string;
  };
}

// La configuración principal ahora incluye ambos plugins.
interface StrapiConfig {
  upload: UploadConfig;
  'users-permissions': UsersPermissionsConfig;
}

export default ({ env }: StrapiEnv): StrapiConfig => ({
  // --- Tu configuración de Cloudinary (sin cambios) ---
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  
  // ▼▼▼ AQUÍ SE AÑADE LA NUEVA CONFIGURACIÓN ▼▼▼
  'users-permissions': {
    config: {
      jwtSecret: env('jHMd9ca5hdMZDXdJkTRl/A=='),
    },
  },
});