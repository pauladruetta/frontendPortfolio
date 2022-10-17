import { Persona } from "./persona.model";

export class Experiencia {
  id: number;
  titulo: string;
  empresa: string;
  tipo: string;
  pais: string;
  provincia: string;
  fecha_inicio: number;
  fecha_fin: number;
  imagen: string;
  persona: Persona;
}
