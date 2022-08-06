import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  formulario: FormGroup;

  constructor() {
    this.toggleEdit = new EventEmitter();
    this.formulario = new FormGroup({
      usuario: new FormControl("",[
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
      ])
   })
  }

//TODO validaciones
  ngOnInit(): void {
  }

  onClick() {
    if (this.loggin) {
      this.loggin = false
      this.toggleEdit.emit(true);
      this.formulario.reset();
      console.log("Se cerró sesión");
    } else {
      if (this.iniciarLogin) {
        this.formulario.reset();
      }
      this.iniciarLogin = !this.iniciarLogin;
    }
  }

  onAcept() {
    console.log(this.formulario.controls);
    try {
      if (this.formulario.value.usuario == "admin") {
        if (this.formulario.value.password == "1234Paula") {
          console.log("Se inició sesión");
          this.iniciarLogin = !this.iniciarLogin;
          this.formulario.reset();
          this.toggleEdit.emit(true);
          this.loggin = true;
        } else {
          throw Error("Usuario o contraseña incorrectos")
        }
      } else {
        throw Error("Usuario o contraseña incorrectos")
      }

    } catch (error) {
      console.log("catch");
      console.log(error);
      console.log("No se Inició sesión");
    }
  }

  onCancel() {
    //TODO Falta dar estilo
    console.log("Cancelo inicio de sesión")
    this.onClickCancel.emit();
    this.formulario.reset();
    this.iniciarLogin = false;
  }
}
