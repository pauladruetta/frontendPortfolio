import { Component, Input, OnInit } from '@angular/core';
import { Educacion } from 'src/app/models/educacion.model';
import { Persona } from 'src/app/models/persona.model';
import { EducacionService } from 'src/app/services/educacion.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.sass']
})
export class EducacionComponent implements OnInit {

  arrEducacion: Educacion[];
  @Input() persona: Persona;
  visibleButton: Boolean = false;
  agregandoNuevo: Boolean = false;

  constructor(
    private educacionService: EducacionService,
    private loginService: LoginService
  ) {
    this.loginService.toggleView.subscribe(data =>  {
      console.log('toggleView: ' + data)
      this.visibleButton = data
    })
    // this.visibleButton = this.loginService.getView();
    // console.log(this.visibleButton )
    //   console.log(this.visibleButton );
      //console.log("creo al componente Educacion");
  }

  async ngOnInit() {
    //console.log("llamo al servicio de Educacion");
    this.visibleButton = this.loginService.getView();
    this.getEducacion()
    //this.educacionService.getAllEducacion().subscribe(data => {
     // console.log("llamando al servicio de Educacion");
      //this.arrEducacion = data;
      //console.log(this.arrEducacion);
    //})
  }

  onAdd(agregandoNuevo: Boolean) {
    this.agregandoNuevo = agregandoNuevo;
  }

  onCancelAdd() {
    console.log("No se Agregó nueva educacion");
    this.agregandoNuevo = false;
    // this.agregandoNuevo = false
  }

  onAddConfirm(){
    this.agregandoNuevo = false;
    this.getEducacion()
    // this.educacionService.getAllEducacion().subscribe(data => {
    //   this.arrEducacion = data;
          //console.log("Educacion : ");
      //console.log(this.arrEducacion);
    //})
  }

  getEducacion() {
    if(this.persona.id != null){
      this.educacionService.getEducacionByPersona(this.persona.id!).subscribe(data => {
        this.arrEducacion = data;
        //console.log(data);
      })
    }
  }
  // onCancel() {
  //   console.log("No se Agregó");
  //   this.onClickCancel.emit();

  //   // this.agregandoNuevo = false
  // }
}
