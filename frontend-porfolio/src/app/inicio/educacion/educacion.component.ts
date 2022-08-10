import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/models/educacion.model';
import { EducacionService } from 'src/app/services/educacion.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.sass']
})
export class EducacionComponent implements OnInit {

  arrEducacion: Educacion[];
  visibleButton: Boolean = false;
  agregandoNuevo: Boolean = false;

  constructor(
    private educacionService: EducacionService,
    private loginService: LoginService
  ) {
    this.loginService.toggleView.subscribe(data =>  {
      console.log('toggleView')
      this.visibleButton = data
    })
      console.log(this.visibleButton )
  }

  async ngOnInit() {
    this.educacionService.getAllEducacion().subscribe(data => {
      this.arrEducacion = data;
      console.log(this.arrEducacion);
    })

    console.log();
  }


  onAdd(agregandoNuevo: Boolean) {
    this.agregandoNuevo = agregandoNuevo;
  }

  onCancelAdd() {
    //TODO Falta dar estilo
    console.log("No se Agregó nueva educacion");
    this.agregandoNuevo = false;
    // this.agregandoNuevo = false
  }

  onAddConfirm(){
    this.agregandoNuevo = false;
    this.educacionService.getAllEducacion().subscribe(data => {
      this.arrEducacion = data;
      console.log(this.arrEducacion);
    })
  }
  // onCancel() {
  //   console.log("No se Agregó");
  //   this.onClickCancel.emit();

  //   // this.agregandoNuevo = false
  // }
}