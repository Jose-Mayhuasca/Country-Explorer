export interface Country {
  name: {
    common: string; // Nombre común (Ej: Peru)
    official: string; // Nombre oficial
  };
  cca3: string; // Código único de 3 letras (ID para rutas, ej: PER)
  capital?: string[]; // Array porque algunos países tienen más de una (o ninguna)
  region: string; // Continente (Africa, Americas, etc.)
  population: number;
  flags: {
    svg: string; // URL de la imagen
    alt?: string; // Descripción para accesibilidad
  };
}
