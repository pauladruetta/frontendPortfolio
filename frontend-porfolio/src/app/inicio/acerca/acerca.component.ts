import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { Persona } from 'src/app/models/persona.model';
import { PersonasService } from 'src/app/personas.service';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.sass'],
//  encapsulation: ViewEncapsulation.None,
//encapsulation : ViewEncapsulation.ShadowDom
})
export class AcercaComponent implements OnInit {

  arrPersonas: Persona[];
  persona:  Persona;
  visibleButton: Boolean;
  personasHTTP: [];

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

  ngOnChanges() {

  }

  // ngOnInit(): void {
  //   // this.arrPersonas = this.personasServices.getAll();
  //   this.personasServices.getAllPromise()
  //   .then(personas => {
  //     this.arrPersonas = personas;
  //     this.persona = this.arrPersonas[0];
  //     console.log(this.arrPersonas)
  //   })
  // }

  async ngOnInit() {
    // this.arrPersonas = await this.personasServices.getAllPromise()
    this.visibleButton = this.loginService.getView();
    this.personasServices.getAllPersonas().subscribe(data => {
      this.arrPersonas = data
      this.persona = this.arrPersonas[0];
      console.log(this.arrPersonas);
    })

    console.log();
  }
}
