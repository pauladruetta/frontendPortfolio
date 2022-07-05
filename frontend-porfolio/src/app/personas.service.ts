import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PERSONAS } from './db/Personas.db';
import { Persona } from './models/persona.model';


@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  baseUrl: string;
  personas: any[];

  constructor( private http: HttpClient) {

    this.baseUrl = "http://localhost:8080/persona"
    console.log("El servicio de usuario está corriendo")

  }

  // getAll(): Persona[] {
  //   return PERSONAS;
  // }

  // getAllPersonas(): Promise<Persona[]  | undefined >  {
  //   return this.http.get<any[]>(this.baseUrl+"/ver/personas").toPromise();
  // }

  getAllPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.baseUrl+"/ver-todas");  }

  getAllPromise(): Promise<Persona[]> {
    return new Promise((resolve, reject) => {
      resolve(PERSONAS);
    });
  }
}
