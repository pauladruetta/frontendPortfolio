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
}

