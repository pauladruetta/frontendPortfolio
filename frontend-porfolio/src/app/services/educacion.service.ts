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
    console.log("El servicio de experiencias está corriendo")

  }

  getAllEducacion(): Observable<Educacion[]> {
    return this.http.get<Educacion[]>(this.baseUrl+"/ver-todas");
  }
}
