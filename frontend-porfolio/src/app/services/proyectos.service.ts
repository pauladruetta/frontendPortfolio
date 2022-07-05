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
    console.log("El servicio de experiencias está corriendo")

  }

  getAllProyetos(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(this.baseUrl+"/ver-todos");
  }
}
