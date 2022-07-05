import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/models/proyecto.model';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.sass']
})
export class ProyectosComponent implements OnInit {

  arrProyectos: Proyecto[];

  constructor(
    private proyectosService: ProyectosService
  ) { }

  async ngOnInit() {

    this.proyectosService.getAllProyetos().subscribe(data => {
      this.arrProyectos = data;
      console.log(this.arrProyectos);
    })

    console.log();
  }

}
