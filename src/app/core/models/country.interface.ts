export interface Country {
  name: {
    common: string; // Nombre común (Ej: Peru)
    official: string; // Nombre oficial
  };
  cca3: string; // Código único de 3 letras (ID para rutas, ej: PER)
  capital?: string[]; // Array porque algunos países tienen más de una (o ninguna)
  region: string; // Continente (Africa, Americas, etc.)
  subregion?: string; // Dato extra útil
  population: number;
  flags: {
    svg: string; // URL de la imagen
    alt?: string; // Descripción para accesibilidad
  };
  tld?: string[]; // Top Level Domain (.pe, .com)
  // Objeto dinámico: { "PEN": { name: "Sol", symbol: "S/." } }
  currencies?: { [key: string]: { name: string; symbol: string } };
  // Objeto dinámico: { "spa": "Spanish", "que": "Quechua" }
  languages?: { [key: string]: string };
  // Array simple de códigos: ["COL", "BRA", "ECU"]
  borders?: string[];
}
