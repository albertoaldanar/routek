import resources from './resources';
// Aqui se pondra el idioma inicial del cliente
export const config = {
  interpolation: { escapeValue: false }, // React already does escaping
  lng: 'es',
  resources,
};

export { resources };
