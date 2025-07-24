// ./config/plugins.ts

// Define la forma del parámetro de entrada, específicamente la función `env`.
interface StrapiEnv {
  env: (key: string, defaultValue?: any) => string;
}

// Define la estructura de la configuración de carga (upload).
interface UploadConfig {
  config: {
    provider: 'cloudinary';
    providerOptions: {
      cloud_name: string;
      api_key: string;
      api_secret: string;
    };
    actionOptions: {
      upload?: object;
      uploadStream?: object;
      delete?: object;
    };
  };
}

// La configuración principal puede tener más propiedades.
interface StrapiConfig {
  upload: UploadConfig;
  // aquí podrías añadir la configuración de otro plugin, por ejemplo:
  // 'another-plugin': { ... }
}

export default ({ env }: StrapiEnv): StrapiConfig => ({
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
});