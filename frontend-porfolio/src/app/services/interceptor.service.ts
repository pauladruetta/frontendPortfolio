import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { LoginService } from './login.service';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})

export class InterceptorService implements HttpInterceptor {
  //@Output() public expiredToken: EventEmitter<boolean>
  //@Output() public usuarioError: EventEmitter<any>

  constructor(private loginService: LoginService, private tokenService: TokenService) {
    //this.expiredToken = new EventEmitter();
    //this.usuarioError = new EventEmitter();
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // var currentUser = this.loginService.UsuarioAutenticado;

    // if (currentUser && currentUser.accessToken){
    //   console.log("Usuario Autorizado")
    //   req = req.clone({
    //     setHeaders: {
    //       Authorization: `Bearer ${currentUser.accessToken}`
    //     }
    //   })
    // }

    const token = this.tokenService.getToken();

    if (this.loginService.isAdmin()){
      //console.log("Usuario administrador")
    }

    if (token){
      //console.log("Usuario Autorizado")
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      })
    }

    //console.log("Interceptor está corriendo" + JSON.stringify(this.tokenService.getToken()))
    //console.log(req)
    return next
      .handle(req)
      .pipe(catchError((error) => this.handleAuthError(error)));
  }

  private handleAuthError(error: HttpErrorResponse): Observable<any> {
    if (error.status === 401 || error.status === 403) {
      //this.tokenService.logOut();
      if (this.tokenService.getToken()){
        console.log("Token expirado")
        //this.expiredToken.emit(true)
        this.loginService.onlogOut()
      } else {
        console.log('usuario no existe')
        this.loginService.onUsuarioError(error)
//        this.usuarioError.emit(error)
      }

      return of(error.message);

    }

    return of(error);
  }

}
