import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl: string;

  showEdit: boolean
  @Output() public toggleView: EventEmitter<boolean>
  currentUserSubject: BehaviorSubject<any>;

  constructor( private http:HttpClient) {
    this.showEdit = false
    this.toggleView = new EventEmitter();
    this.baseUrl = "http://localhost:8080/auth";
    console.log("El servicio de usuario está corriendo");
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}'))
  }

  IniciarSesion(credenciales: any):Observable<any> {
    console.log("Iniciando Sesión")
    return this.http.post(this.baseUrl+"/login", credenciales).pipe(map(data => {

      sessionStorage.setItem('currentUser', JSON.stringify(data));
      this.currentUserSubject.next(data)
      return data;
    }))
  }

  get UsuarioAutenticado() {
    return this.currentUserSubject.value
  }

  getView(): boolean {
    return this.showEdit;
  }

  editView() {
    this.showEdit = !this.showEdit;
    console.log(this.showEdit)
    this.toggleView.emit(this.showEdit)
  }

}
