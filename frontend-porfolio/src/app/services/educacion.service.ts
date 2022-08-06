import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../models/educacion.model';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  baseUrl: string;
  educacionArr: any[];

  constructor( private http: HttpClient) {

    this.baseUrl = "http://localhost:8080/educacion"
    console.log("El servicio de educacion está corriendo")

  }

  getAllEducacion(): Observable<Educacion[]> {
    return this.http.get<Educacion[]>(this.baseUrl+"/ver-todas");
  }

  getEducacionByID(id: number): Observable<Educacion> {
    return this.http.get<Educacion>(this.baseUrl+`/${id}`);
  }

  editEducacion( Educacion: Educacion ): Observable<Educacion> {
    let id = Educacion.id
    console.log("Editando Educacion" + id)
    return this.http.put<Educacion>(this.baseUrl+"/edit", Educacion);

  }

  deleteEducacion( id: number ): Observable<Educacion> {
    console.log("borrando Educacion" + id)
    return this.http.delete<Educacion>(this.baseUrl+`/delete/${id}`);
  }

  addEducacion( Educacion: Educacion ): Observable<Educacion> {
    console.log("agregando Educacion")
    return this.http.post<Educacion>(this.baseUrl+"/new", Educacion);

  }

}
