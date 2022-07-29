import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Educacion } from 'src/app/models/educacion.model';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-educacion-item',
  templateUrl: './educacion-item.component.html',
  styleUrls: ['./educacion-item.component.sass']
})
export class EducacionItemComponent implements OnInit {

  @Input() educacion:  Educacion;
  visibleButton: Boolean;
  visibleItem: Boolean = true;
  fecha_fin: String;
  editable: Boolean = false;

  constructor(
    private educacionService: EducacionService,
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
