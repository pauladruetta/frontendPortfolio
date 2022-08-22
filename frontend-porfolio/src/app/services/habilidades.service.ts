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

  getHabilidadByID(id: number): Observable<Habilidad> {
    return this.http.get<Habilidad>(this.baseUrl+`/${id}`);
  }

  editEHabilidad( Habilidad: Habilidad ): Observable<Habilidad> {
    let id = Habilidad.id
    console.log("Editando Habilidad" + id)
    return this.http.put<Habilidad>(this.baseUrl+"/edit", Habilidad);

  }

    deleteHabilidad( id: number ): Observable<Habilidad> {
      console.log("borrando Habilidad" + id)
      return this.http.delete<Habilidad>(this.baseUrl+`/delete/${id}`);
    }

    addhabilidad( habilidad: Habilidad ): Observable<Habilidad> {
      console.log("agregando habilidad")
      return this.http.post<Habilidad>(this.baseUrl+"/new", habilidad);

    }
}
