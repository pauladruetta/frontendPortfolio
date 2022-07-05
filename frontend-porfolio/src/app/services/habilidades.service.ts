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
    console.log("El servicio de experiencias está corriendo")

  }

  getAllProyetos(): Observable<Habilidad[]> {
    return this.http.get<Habilidad[]>(this.baseUrl+"/ver-todas");
  }
}
