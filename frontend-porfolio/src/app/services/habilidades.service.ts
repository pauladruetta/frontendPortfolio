import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Habilidad } from '../models/habilidad.model';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {

  baseUrl: string;
  private API_URL = environment.API_URL;
  habilidades: Habilidad[];

  constructor( private http: HttpClient, private loginService: LoginService) {

    //this.baseUrl = "http://localhost:8080/habilidad"
    //this.baseUrl = "https://backendapdruetta.herokuapp.com/habilidad";
    //this.baseUrl = this.loginService.getBackUrl() +'/habilidad';
    this.baseUrl = this.API_URL +'/habilidad';
    console.log("El servicio de habilidades está corriendo")
  }

  getAllHabilidades(): Observable<Habilidad[]> {
    return this.http.get<Habilidad[]>(this.baseUrl+"/ver-todas");
  }

  // refreshHabilidades(): Observable<Habilidad[]> {

  //   return this.http.get<Habilidad[]>(this.baseUrl+"/ver-todas").subscribe(data => this.habilidades = data);
  // }

  // getAllHabilidades(): Habilidad[] {
  //   return this.habilidades;
  // }

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
