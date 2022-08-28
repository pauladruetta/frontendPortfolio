import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  agregandoNuevo: Boolean = false;

  constructor(
    private proyectosService: ProyectosService,
    private loginService: LoginService
  ) {
   // this.visibleButton = this.loginService.getView();
     this.loginService.toggleView.subscribe(data =>  {
      console.log('toggleView')
      this.visibleButton = data
    })
      console.log(this.visibleButton )
  }

  async ngOnInit() {
    this.visibleButton = this.loginService.getView();
    this.proyectosService.getAllProyectos().subscribe(data => {
      this.arrProyectos = data;
      console.log(this.arrProyectos);
    })

    console.log();
  }

  onAdd(agregandoNuevo: Boolean) {
    this.agregandoNuevo = agregandoNuevo;
  }

  onCancelAdd() {
    console.log("No se Agregó nuevo Proyecto");
    this.agregandoNuevo = false;
    // this.agregandoNuevo = false
  }

  onAddConfirm(){
    this.agregandoNuevo = false;
    this.proyectosService.getAllProyectos().subscribe(data => {
      this.arrProyectos = data;
      console.log(this.arrProyectos);
    })
  }


}
