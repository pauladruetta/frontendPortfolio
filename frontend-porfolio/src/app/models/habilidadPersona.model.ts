import { Habilidad } from "./habilidad.model";
import { Persona } from "./persona.model";

export class HabilidadPersona {
  id: number;
  habilidad: Habilidad;
  persona: Persona;
  porcentaje: number;
}
