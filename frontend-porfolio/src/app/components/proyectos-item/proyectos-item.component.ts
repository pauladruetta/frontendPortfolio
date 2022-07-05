import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { Proyecto } from 'src/app/models/proyecto.model';

@Component({
  selector: 'app-proyectos-item',
  templateUrl: './proyectos-item.component.html',
  styleUrls: ['./proyectos-item.component.sass']
})
export class ProyectosItemComponent implements OnInit {

  @Input() proyecto: Proyecto;
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
