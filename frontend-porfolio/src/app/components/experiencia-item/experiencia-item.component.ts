import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { Experiencia } from 'src/app/models/experiencia.model';

@Component({
  selector: 'app-experiencia-item',
  templateUrl: './experiencia-item.component.html',
  styleUrls: ['./experiencia-item.component.sass']
})
export class ExperienciaItemComponent implements OnInit {

  @Input() experiencia:  Experiencia;
  visibleButton: Boolean;
  fecha_fin: String

  constructor(
    private loginService: LoginService

  ) {
   this.loginService.toggleView.subscribe(data =>  {
    console.log('toggleView')
    this.visibleButton = data
   })

  }

  async ngOnInit() {
    this.visibleButton = this.loginService.getView();
    console.log(this.visibleButton )
    console.log(this.experiencia )
    if  (this.experiencia.fecha_fin == 0) {
      this.fecha_fin = "Actualidad"
    }

  }

}
