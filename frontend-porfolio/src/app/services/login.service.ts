import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Usuario } from '../models/usuario.model';
import { LoginUsuario } from '../models/loginUsuario.model';
import { JwtDTO } from '../models/jwtDTO.mode';
import { TokenService } from './token.service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl: string;
  loggin: boolean = false;
  isLoginFail: boolean = false;
  showEdit: boolean
  roles: string[]=[];
  @Output() public toggleView: EventEmitter<boolean>
  // currentUserSubject: BehaviorSubject<any>;

  constructor( private http:HttpClient, private tokenService: TokenService) {
    this.showEdit = false
    // this.currentUserSubject = new BehaviorSubject<any>({});
    if (this.tokenService.getToken()){
      console.log('Login: ya logeado')
      this.loggin = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
      //  this.currentUserSubject = new BehaviorSubject<any>(
      //   {
      //     token: true,
      //   });
      if (this.isAdmin()) {
        this.showEdit = true;
        console.log('Auth: Admin')
        console.log('Mostrar edición: '+ this.showEdit)
      }
    }
      console.log('Login: '+ this.loggin)
      this.toggleView = new EventEmitter();
    this.baseUrl = "http://localhost:8080/auth";
    console.log("El servicio de login está corriendo");
    // this.currentUserSubject = new BehaviorSubject<JwtDTO>(
    //   {
    //     token: tokenService.getToken(),
    //     type: "",
    //     nombreUsuario:  tokenService.getUserName(),
    //     authorities: tokenService.getAuthorities()
    //   });

    // this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}'))
  }

  // IniciarSesion(credenciales: any):Observable<any> {
  //   console.log("Iniciando Sesión")
  //   return this.http.post(this.baseUrl+"/login", credenciales).pipe(map(data => {

  //     sessionStorage.setItem('currentUser', JSON.stringify(data));
  //     this.currentUserSubject.next(data)
  //     return data;
  //   }))
  // }

  // get UsuarioAutenticado() {
  //   return this.currentUserSubject.value
  // }

  getView(): boolean {
    return this.showEdit;
  }

  editView() {
    this.showEdit = !this.showEdit;
    console.log(this.showEdit)
    this.toggleView.emit(this.showEdit)
  }

  public nuevo(nuevoUsuario: Usuario): Observable<any> {
    return this.http.post(this.baseUrl+"/newUser", nuevoUsuario)
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDTO> {
    console.log("Login:" + JSON.stringify(loginUsuario));
    return this.http.post<JwtDTO>(this.baseUrl+"/login", loginUsuario)
  }

  public isAdmin(): boolean{
    this.roles = this.tokenService.getAuthorities();
    if (this.roles.includes('ROLE_ADMIN')){
      console.log("usuario administrador");
      return true
    }
    return false
  }

}
