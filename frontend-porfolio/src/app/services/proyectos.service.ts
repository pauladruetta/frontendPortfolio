import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../models/proyecto.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  baseUrl: string;
  proyectos: any[];

  constructor( private http: HttpClient) {

    this.baseUrl = "http://localhost:8080/proyecto"
    console.log("El servicio de proyectos está corriendo")

  }

  getAllProyectos(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(this.baseUrl+"/ver-todos");
  }


  //FIXME check
  editProyecto( Proyecto: Proyecto ): Observable<Proyecto> {
    let id = Proyecto.id
    console.log("Editando Proyecto" + id)
    return this.http.put<Proyecto>(this.baseUrl+"/edit", Proyecto);

  }
    //TODO edit, add and delete

  // deletePersona( id: number ): Observable<number> {
  //   console.log("borrando persona")
  //   return this.http.delete(this.baseUrl+"/delete", id);

  // }

  // addPersona( persona: Persona ): Observable<Persona> {
  //   console.log("agregando persona")
  //   return this.http.post(this.baseUrl+"/nueva", persona);

  // }
}
