import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { Habilidad } from 'src/app/models/habilidad.model';

@Component({
  selector: 'app-habilidades-item',
  templateUrl: './habilidades-item.component.html',
  styleUrls: ['./habilidades-item.component.sass']
})
export class HabilidadesItemComponent implements OnInit {


  @Input() habilidad: Habilidad;
  visibleButton: Boolean;

  constructor(
    private loginService: LoginService

  ) {
   this.loginService.toggleView.subscribe(data =>  {
    console.log('toggleView')
    this.visibleButton = data
   })

    console.log(this.visibleButton )
  }

  async ngOnInit() {
    this.visibleButton = this.loginService.getView();
  }
}


