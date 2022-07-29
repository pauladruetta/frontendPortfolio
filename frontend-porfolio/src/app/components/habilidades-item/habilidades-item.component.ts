import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Habilidad } from 'src/app/models/habilidad.model';

@Component({
  selector: 'app-habilidades-item',
  templateUrl: './habilidades-item.component.html',
  styleUrls: ['./habilidades-item.component.sass']
})
export class HabilidadesItemComponent implements OnInit {


  @Input() habilidad: Habilidad;
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

  }

  async ngOnInit() {
    this.visibleButton = this.loginService.getView();
  }

  onEdit(editable: Boolean) {
    this.editable = editable;
    //TODO Falta agregar servicio que permite editar de la Base de Datos
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


