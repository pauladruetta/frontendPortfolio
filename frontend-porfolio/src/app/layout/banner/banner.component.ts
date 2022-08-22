import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Persona } from 'src/app/models/persona.model';
import { PersonasService } from 'src/app/services/personas.service';
import { EducacionService } from 'src/app/services/educacion.service';

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

  constructor(
    private personasServices: PersonasService,
    private educacionService: EducacionService,
    private loginService: LoginService

  ) {
   this.loginService.toggleView.subscribe(data =>  {
    console.log('toggleView')
    this.visibleButton = data
   })

    console.log(this.visibleButton )
  }

  // ngOnInit() {}
  // async ngOnInit() {
  //   this.arrPersonas = await this.personasServices.getAllPromise()
  //   this.persona = this.arrPersonas[0];
  //   console.log(this.arrPersonas);
  //   this.visibleButton = this.loginService.getView();
  // }

  async ngOnInit() {
    console.log("banner");
    this.personasServices.getAllPersonas().subscribe(data => {
      console.log(data);
      this.arrPersonas = data
      this.persona = this.arrPersonas[0];
      console.log(this.persona);
    }, err => {
      console.log("error")
      console.log(err)
    })
  }

  onEdit(editable: Boolean) {
    this.editable = editable;
    // TODO:Falta agregar servicio que permite editar la Base de Datos
  }
}

