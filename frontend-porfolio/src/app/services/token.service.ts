import { Injectable } from '@angular/core';

const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUserName';
const AUTHORITIES_KEY = 'AusthAuthorities';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  roles: Array<string> = [];

  constructor() { }

  public setToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY) || "";
  }

  public setUserName(userName: string): void {
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, userName);
  }

  public getUserName(): string {
    return sessionStorage.getItem(USERNAME_KEY) || "";
  }

  public setAuthorities(authorities: string[]): void {
    window.sessionStorage.removeItem(AUTHORITIES_KEY);
    //console.log(authorities)
    window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
  }

  public getAuthorities(): string[] {
    this.roles = [];

    if (sessionStorage.getItem(AUTHORITIES_KEY) && this.notVariableNula(sessionStorage.getItem(AUTHORITIES_KEY))) {
      JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)!).forEach( (authority: any )=> {
        this.roles.push(authority.authority);
      })
      //console.log(this.roles)
      return this.roles;
    }
    //console.log(this.roles)
    return this.roles;
  }

  public logOut(): void {
    window.sessionStorage.clear()
  }

  public notVariableNula(variable: any){

    if ( variable == null || variable == undefined || variable == "null" || variable == "undefined") {
        return false
      } else {
        return true
      }

    }

    public tokenExpired(token: string) {
      const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
      return (Math.floor((new Date).getTime() / 1000)) >= expiry;
    }
//TODO Faltaría correr esta función cada tanto para checkear si ya exipiró

}
