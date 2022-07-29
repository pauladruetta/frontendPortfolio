import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidad } from '../models/habilidad.model';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {

  baseUrl: string;
  habilidades: any[];

  constructor( private http: HttpClient) {

    this.baseUrl = "http://localhost:8080/habilidad"
    console.log("El servicio de habilidades está corriendo")

  }

  getAllHabilidades(): Observable<Habilidad[]> {
    return this.http.get<Habilidad[]>(this.baseUrl+"/ver-todas");
  }


  //FIXME check
  editEHabilidad( Habilidad: Habilidad ): Observable<Habilidad> {
    let id = Habilidad.id
    console.log("Editando Habilidad" + id)
    return this.http.put<Habilidad>(this.baseUrl+"/edit", Habilidad);

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
