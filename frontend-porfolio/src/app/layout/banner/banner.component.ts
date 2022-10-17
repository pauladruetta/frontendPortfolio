import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Persona } from 'src/app/models/persona.model';
import { DataService } from 'src/app/services/data.service';
import { PersonasService } from 'src/app/services/personas.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.sass']
})
export class BannerComponent implements OnInit {

  arrPersonas: Persona[];
  persona:  Persona;
  visibleButton: Boolean;
  editable: Boolean = false;
  imagen_editada: string;

  constructor(
    private dataService: DataService,
    private personasServices: PersonasService,
    private loginService: LoginService

  ) {
   this.loginService.toggleView.subscribe(data =>  {
    console.log('toggleView: ' + data)
    this.visibleButton = data
    if (!this.visibleButton){
      this.editable =false
    }
   })
    //console.log(this.visibleButton )
  }

  // ngOnInit() {}
  // async ngOnInit() {
  //   this.arrPersonas = await this.personasServices.getAllPromise()
  //   this.persona = this.arrPersonas[0];
  //   console.log(this.arrPersonas);
  //   this.visibleButton = this.loginService.getView();
  // }

  async ngOnInit() {
    //console.log("banner");
    this.visibleButton = this.loginService.getView();
    // this.personasServices.getAllPersonas().subscribe(data => {
    //   console.log(data);
    //   this.arrPersonas = data
    //   this.persona = this.arrPersonas[0];
    //   console.log(this.persona);
    // this.personasServices.getPersona(281).subscribe(data=> {
    this.dataService.persona.subscribe(data=> {
      //console.log(data);
      this.persona = data;
      //console.log("traigo persona");
      //console.log(this.persona);
    }, err => {
      console.log("error")
      console.log(err)
    })
  }

  onEdit(editable: Boolean) {
    this.editable = editable;
  }

  onAcept(editable: Boolean) {
    //TODO Falta poder subir una imagen de perfil desde archivo - investigar - dar ambas opciones

    this.imagen_editada = (document.getElementById("new_image_url") as HTMLInputElement).value
    this.persona.imagen_portada = this.imagen_editada
    try {
      this.personasServices.editPersona(this.persona).subscribe(data =>
        {
          console.log(data);
          console.log("Se modificó la base de datos");
          this.personasServices.getAllPersonas().subscribe(data => {
          this.arrPersonas = data
          this.persona = this.arrPersonas[0];
          console.log(this.arrPersonas);
          })
        })
    } catch (error) {
      console.log(error);
      console.log("No se modificó la base de datos")
    }
    this.editable = false
  }

  onCancel() {
    console.log("No se hicieron modificaciones")
    this.editable = false
    }
}

