import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Usuario } from '../models/usuario.model';
import { LoginUsuario } from '../models/loginUsuario.model';
import { JwtDTO } from '../models/jwtDTO.mode';
import { TokenService } from './token.service';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl: string;
  private API_URL = environment.API_URL;
  loggin: boolean = false;
  isLoginFail: boolean = false;
  showEdit: boolean = false
  roles: string[]=[];
  @Output() public toggleView: EventEmitter<boolean>
  @Output() public tokenExpired: EventEmitter<boolean>
  @Output() public usuarioError: EventEmitter<any>
  // currentUserSubject: BehaviorSubject<any>;

  constructor( private http:HttpClient, private tokenService: TokenService) {
    //console.log('Login: '+ this.loggin)
    this.toggleView = new EventEmitter();
    this.tokenExpired = new EventEmitter();
    this.usuarioError = new EventEmitter();
    this.showEdit = false
    // this.currentUserSubject = new BehaviorSubject<any>({});
    const token = this.tokenService.getToken();
    if (token){
      if (this.tokenService.tokenExpired(token)) {
        console.log("el token expiró")
        this.onlogOut()
      } else {
        console.log('Login: ya logeado')
        this.loggin = true;
        this.isLoginFail = false;
        this.roles = this.tokenService.getAuthorities();
        if (this.isAdmin()) {
          this.showEdit = true;
          console.log('Auth: Admin')
          //console.log('Mostrar edición: '+ this.showEdit)
        }
      }
    //TODO si tengo dos tipos de usuario, uno puede editar, pero no puede crear usuarios, el otro si
      //  this.currentUserSubject = new BehaviorSubject<any>(
      //   {
      //     token: true,
      //   });

    }
    // this.baseUrl = "http://localhost:8080";
      this.baseUrl = this.API_URL +'/auth';
//    this.baseUrl = "https://backendapdruetta.herokuapp.com";
    //this.baseUrl = "https://backendapdruetta.herokuapp.com/auth";
    //console.log("El servicio de login está corriendo");
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
    //console.log("Login:" + JSON.stringify(loginUsuario));
    console.log("Login")
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

  public getBackUrl(){
    return this.baseUrl
  }

  public onlogOut(){
    console.log("login service send event token expired")
    this.tokenExpired.emit(true)
  }

  public onUsuarioError(err: any){
    console.log("login service send event token expired")
    this.usuarioError.emit(err)
  }


}
