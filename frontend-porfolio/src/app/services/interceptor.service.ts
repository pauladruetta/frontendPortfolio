import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private loginService: LoginService, private tokenService: TokenService) { }

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

    if (this.loginService.isAdmin()){
      console.log("Usuario Autorizado")
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.tokenService.getToken()}`
        }
      })
    }
    console.log("Interceptor está corriendo" + JSON.stringify(this.tokenService.getToken()))
    console.log(req)
    return next.handle(req);
  }
}
