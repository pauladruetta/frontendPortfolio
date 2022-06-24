import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { Persona } from 'src/app/models/persona.model';
import { PersonasService } from 'src/app/personas.service';

@Component({
  selector: 'app-habilidades-item',
  templateUrl: './habilidades-item.component.html',
  styleUrls: ['./habilidades-item.component.sass']
})
export class HabilidadesItemComponent implements OnInit {


  arrPersonas: Persona[];
  persona:  Persona;
  visibleButton: Boolean;

  constructor(
    private personasServices: PersonasService,
    private loginService: LoginService

  ) {
   this.loginService.toggleView.subscribe(data =>  {
    console.log('toggleView')
    this.visibleButton = data
   })

    console.log(this.visibleButton )
  }

  async ngOnInit() {
    this.arrPersonas = await this.personasServices.getAllPromise()
    this.persona = this.arrPersonas[0];
    console.log(this.arrPersonas);
    this.visibleButton = this.loginService.getView();
  }
}
