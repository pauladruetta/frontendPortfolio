import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Persona } from 'src/app/models/persona.model';
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

  constructor(
    private personasServices: PersonasService,
    //FIXME Acá no llama al login servise
    // private loginService: LoginService

  ) {
  //  this.loginService.toggleView.subscribe(data =>  {
  //   console.log('toggleView')
  //   this.visibleButton = data
  //  })

  //   console.log(this.visibleButton )
  }

  // ngOnInit() {}
  // async ngOnInit() {
  //   this.arrPersonas = await this.personasServices.getAllPromise()
  //   this.persona = this.arrPersonas[0];
  //   console.log(this.arrPersonas);
  //   this.visibleButton = this.loginService.getView();
  // }

//FIXME cambiar al nuevo tipo de login con JWT
//FIXME Controlar todos los otros


  async ngOnInit() {
    this.personasServices.getAllPersonas().subscribe(data => {
      console.log(data);
      this.arrPersonas = data
      this.persona = this.arrPersonas[0];
      console.log(this.persona);
    })
  }

  onEdit(editable: Boolean) {
    this.editable = editable;
    // Falta agregar servicio que permite editar la Base de Datos
  }
}
