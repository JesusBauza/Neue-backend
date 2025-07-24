import type { Schema, Struct } from '@strapi/strapi';

export interface CredCred extends Struct.ComponentSchema {
  collectionName: 'components_cred_creds';
  info: {
    displayName: 'Cred';
  };
  attributes: {
    Nombre: Schema.Attribute.String;
    Profesion1: Schema.Attribute.String;
    Profesion2: Schema.Attribute.String;
    Profesion3: Schema.Attribute.String;
    Profesion4: Schema.Attribute.String;
  };
}

export interface Credito2Credito2 extends Struct.ComponentSchema {
  collectionName: 'components_credito_2_credito_2s';
  info: {
    displayName: 'Credito_2';
    icon: 'underline';
  };
  attributes: {
    Nombre: Schema.Attribute.String;
    profesions: Schema.Attribute.Relation<
      'oneToMany',
      'api::profesion.profesion'
    >;
  };
}

export interface CreditosCreditos extends Struct.ComponentSchema {
  collectionName: 'components_creditos_creditos';
  info: {
    displayName: 'Creditos';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'cred.cred': CredCred;
      'credito-2.credito-2': Credito2Credito2;
      'creditos.creditos': CreditosCreditos;
    }
  }
}
