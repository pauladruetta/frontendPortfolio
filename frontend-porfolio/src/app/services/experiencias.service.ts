import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Experiencia } from '../models/experiencia.model';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class ExperienciasService {

  baseUrl: string;
  private API_URL = environment.API_URL;
  experiencias: any[];

  constructor( private http: HttpClient, private loginService: LoginService) {

    //this.baseUrl = "http://localhost:8080/experiencia"
    //this.baseUrl = "https://backendapdruetta.herokuapp.com/experiencia";
    //this.baseUrl = this.loginService.getBackUrl() +'/experiencia';
    this.baseUrl = this.API_URL +'/experiencia';
    //console.log("El servicio de experiencias está corriendo")
  }

  getAllExperiencias(): Observable<Experiencia[]> {
    console.log("Trayendo todas las experiencias")
    return this.http.get<Experiencia[]>(this.baseUrl+"/ver-todas");
  }

  getExperienciaByID(id: number): Observable<Experiencia> {
    console.log("Trayendo experiencia por id")
    return this.http.get<Experiencia>(this.baseUrl+`/${id}`);
  }

  getExperienciasByPersona(id: number): Observable<Experiencia[]> {
    console.log("Trayendo todas las experiencia de persona")
    return this.http.get<Experiencia[]>(this.baseUrl+`/persona/${id}`);
  }

  editExperiencia( Experiencia: Experiencia ): Observable<Experiencia> {
    let id = Experiencia.id
    console.log("Editando experiencia")
    return this.http.put<Experiencia>(this.baseUrl+"/edit", Experiencia);

  }

  deleteExperiencia( id: number ): Observable<Experiencia> {
    console.log("borrando experiencia")
    return this.http.delete<Experiencia>(this.baseUrl+`/delete/${id}`);
  }

  addExperiencia( Experiencia: Experiencia ): Observable<Experiencia> {
    console.log("agregando Experiencia")
    return this.http.post<Experiencia>(this.baseUrl+"/new", Experiencia);

  }
}

