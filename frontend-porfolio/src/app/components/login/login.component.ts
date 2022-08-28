import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  @Output() toggleEdit: EventEmitter<Boolean>
  @Output() onClickAcept: EventEmitter<Boolean> = new EventEmitter();
  @Output() onClickCancel: EventEmitter<Boolean> = new EventEmitter();
  iniciarLogin: boolean= false;
  loggin: boolean = false;
  isLoginFail: boolean = false;
  error_mensaje: string = "Error en el login"
  formulario: FormGroup;
  roles: string[]=[];

  constructor(
    private loginService: LoginService,
    private tokenService: TokenService
  ) {
    this.toggleEdit = new EventEmitter();
    this.formulario = new FormGroup({
      nombreUsuario: new FormControl("",[
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(15),
        Validators.pattern(/^[a-z\s\u00E0-\u00FC\u00f1\0-9]*$/i)
      ]),
      password: new FormControl("",[
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(16),
        Validators.pattern(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/)
      ]),
      // deviceInfo: new FormGroup({
      //   deviceId: new FormControl("156465464",[]),
      //   deviceType: new FormControl("Device_Type_Windows",[]),
      //   notificationToken: new FormControl("asdfasdfasd",[])
      // })
   })
   //FIXME: no se desconecta cuando el token está caduco, o no pide uno nuevo
   if (this.tokenService.getToken()){
    this.loggin = true;
    this.isLoginFail = false;
    this.roles = this.tokenService.getAuthorities();
    this.loginService.isAdmin()
    this.toggleEdit.emit(true);
   }
    console.log('Login: '+this.loggin)
  }

  ngOnInit(): void {
    console.log("Login component")
  }

  onEnviar(event:Event){
    event.preventDefault;
    // this.loginService.IniciarSesion(this.formulario.value).subscribe(data => {
    //   console.log("DATA:" + JSON.stringify(data));
    // })
    this.loginService.login(this.formulario.value).subscribe(data => {
      console.log("DATA:" + JSON.stringify(data));
      this.loggin = true;

      this.tokenService.setToken(data.token);
      this.tokenService.setUserName(data.nombreUsuario);
      this.tokenService.setAuthorities(data.authorities);
      this.roles = data.authorities;
      console.log(data.authorities);
      console.log("Se inició sesión");
      this.iniciarLogin = !this.iniciarLogin;
      this.resetForm();
      this.toggleEdit.emit(true);
    },
    err => {
      console.log(err.status)
      console.log("Error en el login");
      this.isLoginFail = true
      if (err.status == 401) {
        this.error_mensaje = "Usuario no Autorizado"
      }
      setTimeout(() => this.resetForm(), 1000)
    })

  };


  resetForm() {
    this.isLoginFail = false;
    this.formulario.reset();
    console.log("Formulario limpio");
  };

  onClick() {
    if (this.loggin) {
      this.loggin = false
      this.toggleEdit.emit(true);
      // this.loginService.editView();
      this.formulario.reset;
      console.log("Se cerró sesión");
      this.tokenService.logOut();
    } else {
      console.log("Toggle button");
      if (this.iniciarLogin) {
        console.log("iniciar sesión true");
        this.resetForm()
      }
      this.iniciarLogin = !this.iniciarLogin;
    }
  }

  // onAcept() {
  //   console.log(this.formulario.controls);
  //   // try {
  //   //   if (this.formulario.value.usuario == "admin4") {
  //   //     if (this.formulario.value.password == "1234Paula") {
  //   //       console.log("Se inició sesión");
  //   //       this.iniciarLogin = !this.iniciarLogin;
  //   //       this.formulario.reset();
  //   //       this.toggleEdit.emit(true);
  //   //       this.loggin = true;
  //   //     } else {
  //   //       throw Error("Usuario o contraseña incorrectos")
  //   //     }
  //   //   } else {
  //   //     throw Error("Usuario o contraseña incorrectos")
  //   //   }

  //   // } catch (error) {
  //   //   console.log("catch");
  //   //   console.log(error);
  //   //   console.log("No se Inició sesión");
  //   // }
  // }

  onCancel() {
    console.log("Cancelo inicio de sesión")
    this.onClickCancel.emit();
    this.formulario.reset();
    this.iniciarLogin = false;
  }
}
