import { Habilidad } from "./habilidad.model";

export class Proyecto {
  id: number;
  titulo: string;
  descripcion: string;
  url: string;
  fecha: number;
  imagen: string;
  habilidades: Array<String>;
}
