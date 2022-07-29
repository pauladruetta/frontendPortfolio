import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Proyecto } from 'src/app/models/proyecto.model';

@Component({
  selector: 'app-proyectos-item',
  templateUrl: './proyectos-item.component.html',
  styleUrls: ['./proyectos-item.component.sass']
})
export class ProyectosItemComponent implements OnInit {

  @Input() proyecto: Proyecto;
  visibleButton: Boolean;
  visibleItem: Boolean = true;
  editable: Boolean = false;

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

  onEdit(editable: Boolean) {
    this.editable = editable;
    //TODO Falta agregar servicio que permite editar la Base de Datos
  }

  onDelete() {
    console.log("Item Eliminado");
    this.visibleItem = false;
    //TODO Falta agregar servicio que permite eliminar de la Base de Datos
  }

  onAcept(editable: Boolean) {
    //FIXME Hacerlo funcionar de manera general y con validaciones
    //TODO Falta dar estilo
    //TODO Falta poder editar imagen
  }

  onCancel() {
    //TODO Falta dar estilo
    console.log("No se hicieron modificaciones")
    this.editable = false
  }
}
