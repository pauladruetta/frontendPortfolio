import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona.model';
import { LoginService } from './login.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  baseUrl: string
  private API_URL = environment.API_URL;
 // baseUrl: string = 'https://backendapdruetta.herokuapp.com/persona';
  personas: any[];

  // constructor( private http: HttpClient, private loginService: LoginService) {
    constructor( private http: HttpClient) {
  //  this.baseUrl = "http://localhost:8080/persona"
    //this.baseUrl = 'https://backendapdruetta.herokuapp.com/persona';
    this.baseUrl = this.API_URL +'/persona';
    console.log("El servicio de usuario está corriendo")
    console.log(this.API_URL)
  }

  // getAll(): Persona[] {
  //   return PERSONAS;
  // }

  // getAllPersonas(): Promise<Persona[]  | undefined >  {
  //   return this.http.get<any[]>(this.baseUrl+"/ver/personas").toPromise();
  // }

  // public getAllPersonas(): Observable<Persona[]> {
  //   return this.http.get<Persona[]>(this.baseUrl + '/ver-todas');
  // }

  getAllPersonas(): Observable<Persona[]> {
    console.log("trayendo personas")
    return this.http.get<Persona[]>(this.baseUrl + `/ver-todas`);
  }

  // getAllPersonas(): Observable<Persona[]> {
  //   console.log("trayendo personas")
  //   return this.http.get<Persona[]>(this.baseUrl + `/ver-todas`);
  // }

  editPersona( persona: Persona ): Observable<Persona> {
    console.log("Editando persona")
    return this.http.put<Persona>(this.baseUrl+"/edit", persona);

  }

  // getAllPromise(): Promise<Persona[]> {
  //   return new Promise((resolve, reject) => {
  //     resolve(PERSONAS);
  //   });
  // }
}
