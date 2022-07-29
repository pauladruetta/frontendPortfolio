import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../models/experiencia.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienciasService {

  baseUrl: string;
  experiencias: any[];

  constructor( private http: HttpClient) {

    this.baseUrl = "http://localhost:8080/experiencia"
    console.log("El servicio de experiencias está corriendo")

  }

  getAllExperiencias(): Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>(this.baseUrl+"/ver-todas");
  }

  getExperienciaByID(id: number): Observable<Experiencia> {
    return this.http.get<Experiencia>(this.baseUrl+`/${id}`);
  }

  //FIXME check
  editExperiencia( Experiencia: Experiencia ): Observable<Experiencia> {
    let id = Experiencia.id
    console.log("Editando experiencia" + id)
    return this.http.put<Experiencia>(this.baseUrl+"/edit", Experiencia);

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

