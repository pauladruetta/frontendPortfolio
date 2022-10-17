import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Educacion } from '../models/educacion.model';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  baseUrl: string;
  private API_URL = environment.API_URL;
  //baseUrl: string = "https://backendapdruetta.herokuapp.com/educacion";
  educacionArr: any[];

  constructor( private http: HttpClient, private loginService: LoginService) {

    //this.baseUrl = "http://localhost:8080/educacion"
    // this.baseUrl = "https://backendapdruetta.herokuapp.com/educacion";
    this.baseUrl = this.API_URL +'/educacion';
//    this.baseUrl = this.loginService.getBackUrl() +'/educacion';
    //console.log("El servicio de educacion está corriendo hasta acá")
  }

  getAllEducacion(): Observable<Educacion[]> {
    console.log("trayendo todo educacion");
    return this.http.get<Educacion[]>(this.baseUrl+`/ver-todas`);
  }

  getEducacionByID(id: number): Observable<Educacion> {
    console.log("trayendo educacion por id");
    return this.http.get<Educacion>(this.baseUrl+`/${id}`);
  }

  getEducacionByPersona(id: number): Observable<Educacion[]> {
    console.log("Trayendo toda la Educacion de persona")
    return this.http.get<Educacion[]>(this.baseUrl+`/persona/${id}`);
  }

  editEducacion( Educacion: Educacion ): Observable<Educacion> {
    let id = Educacion.id
    console.log("Editando Educacion" )
    return this.http.put<Educacion>(this.baseUrl+"/edit", Educacion);

  }

  deleteEducacion( id: number ): Observable<Educacion> {
    console.log("borrando Educacion" )
    return this.http.delete<Educacion>(this.baseUrl+`/delete/${id}`);
  }

  addEducacion( Educacion: Educacion ): Observable<Educacion> {
    console.log("agregando Educacion")
    return this.http.post<Educacion>(this.baseUrl+"/new", Educacion);

  }

}
