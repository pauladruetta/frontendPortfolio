import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Habilidad } from '../models/habilidad.model';
import { HabilidadPersona } from '../models/habilidadPersona.model';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {

  habilidadBaseURL: string;
  habilidadPersonaBaseURL: string;
  private API_URL = environment.API_URL;
  habilidades: Habilidad[];

  constructor( private http: HttpClient, private loginService: LoginService) {

    //this.baseUrl = "http://localhost:8080/habilidad"
    //this.baseUrl = "https://backendapdruetta.herokuapp.com/habilidad";
    //this.baseUrl = this.loginService.getBackUrl() +'/habilidad';
    this.habilidadBaseURL = this.API_URL +'/habilidad';
    this.habilidadPersonaBaseURL = this.API_URL +'/habilidadPersona';
    //console.log("El servicio de habilidades está corriendo")
  }

  getAllHabilidades(): Observable<Habilidad[]> {
    console.log("trayendo todas las habilidades")
    return this.http.get<Habilidad[]>(this.habilidadBaseURL+"/ver-todas");
  }

  // refreshHabilidades(): Observable<Habilidad[]> {
  //   return this.http.get<Habilidad[]>(this.baseUrl+"/ver-todas").subscribe(data => this.habilidades = data);
  // }
  // getAllHabilidades(): Habilidad[] {
  //   return this.habilidades;
  // }

  getHabilidadPersonaByID(id: number): Observable<HabilidadPersona> {
    console.log("trayendo una habilidad")
    return this.http.get<HabilidadPersona>(this.habilidadPersonaBaseURL+`/${id}`);
  }

  getHabilidadByID(id: number): Observable<Habilidad> {
    console.log("trayendo una habilidad")
    return this.http.get<Habilidad>(this.habilidadBaseURL+`/${id}`);
  }

  getHabilidadesByPersona(id: number): Observable<HabilidadPersona[]> {
    console.log("Trayendo todas las habilidades de persona")
    return this.http.get<HabilidadPersona[]>(this.habilidadPersonaBaseURL+`/persona/${id}`);
  }

  editEHabilidad( Habilidad: Habilidad ): Observable<Habilidad> {
    //let id = Habilidad.id
    console.log("Editando Habilidad")
    return this.http.put<Habilidad>(this.habilidadBaseURL+"/edit", Habilidad);

  }

  getAllHabilidadesQueNo(id: number):Observable<Habilidad[]>  {
    console.log(" habilidades que aún no tiene la persona")
    // let todas: Habilidad[];
    // let filtradas: Habilidad[] = [];
    // let filtradasHabP: HabilidadPersona[] = [];
    // await this.getAllHabilidades().subscribe(habilidades => {
    //   todas = habilidades
    //   console.log(todas)
    //   this.getHabilidadesByPersona(id).subscribe(habP =>{
    //     console.log(habP)
    //     habP.forEach(habP => {
    //       todas = todas.filter(hab => habP.habilidad.nombre != hab.nombre)
    //       console.log(todas)
    //     })
    //     filtradas = todas
    //     console.log(filtradas)
    //   })
      //filtradasHabP.forEach(hab => filtradas.push(hab.habilidad))

    //})
    return this.http.get<Habilidad[]>(this.habilidadPersonaBaseURL+`/noPersona/${id}`);
  }

  editHabilidadPersona( Habilidad: HabilidadPersona ): Observable<HabilidadPersona> {
    //let id = Habilidad.id
    console.log("Editando Habilidad")
    return this.http.put<HabilidadPersona>(this.habilidadPersonaBaseURL+"/edit", Habilidad);

  }

    deleteHabilidad( id: number ): Observable<Habilidad> {
      console.log("borrando Habilidad")
      return this.http.delete<Habilidad>(this.habilidadBaseURL+`/delete/${id}`);
    }

    deleteHabilidadPersona( id: number ): Observable<HabilidadPersona> {
      console.log("borrando Habilidad")
      return this.http.delete<HabilidadPersona>(this.habilidadPersonaBaseURL+`/delete/${id}`);
    }

    addhabilidad( habilidad: Habilidad ): Observable<Habilidad> {
      console.log("agregando habilidad")

      return this.http.post<Habilidad>(this.habilidadBaseURL+"/new", habilidad);
    }

    addHabilidadPersona( habilidad: HabilidadPersona ): Observable<HabilidadPersona> {
      console.log("agregando habilidad")
      console.log(habilidad)
      return this.http.post<HabilidadPersona>(this.habilidadPersonaBaseURL+"/new", habilidad);
    }
}
