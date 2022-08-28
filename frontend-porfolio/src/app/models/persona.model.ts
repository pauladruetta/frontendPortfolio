export class Persona {
  id: number;
  nombre: string;
  apellido: string;
  titulo: string;
  edad: number;
  fecha_nacimiento: string;
  imagen_perfil: string;
  imagen_portada: string;
  descripcion: string;

  constructor( nombre: string, apellido: string, titulo: string, edad: number, fecha_nacimiento: string, imagen_perfil: string, imagen_portada: string, descripcion: string){
    this.nombre = nombre,
    this.apellido = apellido,
    this.titulo = titulo,
    this.edad = edad,
    this.fecha_nacimiento = fecha_nacimiento,
    this.imagen_perfil = imagen_perfil,
    this.imagen_portada = imagen_portada,
    this.descripcion = descripcion
  }
}
