import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/models/proyecto.model';
import { LoginService } from 'src/app/services/login.service';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.sass']
})
export class ProyectosComponent implements OnInit {

  arrProyectos: Proyecto[];
  visibleButton: Boolean = false;

  constructor(
    private proyectosService: ProyectosService,
    private loginService: LoginService
  ) {
    this.loginService.toggleView.subscribe(data =>  {
      console.log('toggleView')
      this.visibleButton = data
    })
      console.log(this.visibleButton )
  }

  async ngOnInit() {

    this.proyectosService.getAllProyectos().subscribe(data => {
      this.arrProyectos = data;
      console.log(this.arrProyectos);
    })

    console.log();
  }

}
