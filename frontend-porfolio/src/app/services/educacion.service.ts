import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../models/educacion.model';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  baseUrl: string;
  personas: any[];

  constructor( private http: HttpClient) {

    this.baseUrl = "http://localhost:8080/educacion"
    console.log("El servicio de educacion está corriendo")

  }

  getAllEducacion(): Observable<Educacion[]> {
    return this.http.get<Educacion[]>(this.baseUrl+"/ver-todas");
  }

    //FIXME check
    editEducacion( Educacion: Educacion ): Observable<Educacion> {
      let id = Educacion.id
      console.log("Editando Educacion" + id)
      return this.http.put<Educacion>(this.baseUrl+"/edit", Educacion);

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
