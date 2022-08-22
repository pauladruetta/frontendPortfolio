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

  editExperiencia( Experiencia: Experiencia ): Observable<Experiencia> {
    let id = Experiencia.id
    console.log("Editando experiencia" + id)
    return this.http.put<Experiencia>(this.baseUrl+"/edit", Experiencia);

  }

  deleteExperiencia( id: number ): Observable<Experiencia> {
    console.log("borrando experiencia" + id)
    return this.http.delete<Experiencia>(this.baseUrl+`/delete/${id}`);
  }

  addExperiencia( Experiencia: Experiencia ): Observable<Experiencia> {
    console.log("agregando Experiencia")
    return this.http.post<Experiencia>(this.baseUrl+"/new", Experiencia);

  }
}

