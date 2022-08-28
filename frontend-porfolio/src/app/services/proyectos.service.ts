import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Proyecto } from '../models/proyecto.model';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  baseUrl: string;
  proyectos: any[];
  private API_URL = environment.API_URL;

  //constructor( private http: HttpClient, private loginService: LoginService) {
  constructor( private http: HttpClient) {

    //this.baseUrl = "http://localhost:8080/proyecto"
    //this.baseUrl = "https://backendapdruetta.herokuapp.com/proyecto";
    //this.baseUrl = this.loginService.getBackUrl() +'/proyecto';
    this.baseUrl = this.API_URL +'/proyecto';
    console.log("El servicio de proyectos está corriendo")

  }

  getAllProyectos(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(this.baseUrl+"/ver-todos");
  }

  getProyectoByID(id: number): Observable<Proyecto> {
    return this.http.get<Proyecto>(this.baseUrl+`/${id}`);
  }

  editProyecto( Proyecto: Proyecto ): Observable<Proyecto> {
    let id = Proyecto.id
    console.log("Editando Proyecto" + id)
    console.log(Proyecto)
    return this.http.put<Proyecto>(this.baseUrl+"/edit", Proyecto);

  }

    deleteProyecto( id: number ): Observable<Proyecto> {
      console.log("borrando Proyecto" + id)
      return this.http.delete<Proyecto>(this.baseUrl+`/delete/${id}`);
    }

    addProyecto( Proyecto: Proyecto ): Observable<Proyecto> {
      console.log("agregando Proyecto")
      return this.http.post<Proyecto>(this.baseUrl+"/new", Proyecto);

    }
}
