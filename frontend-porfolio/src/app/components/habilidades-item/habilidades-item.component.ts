import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Habilidad } from 'src/app/models/habilidad.model';
import { HabilidadesService } from 'src/app/services/habilidades.service';

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
  habilidadEditada: Habilidad;

  constructor(
    private loginService: LoginService,
    private habilidadesService: HabilidadesService

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
  }


  onDelete() {
    console.log("Item Eliminado");
    this.visibleItem = false;

    //TODO confirmaciones
    try {
        this.habilidadesService.deleteHabilidad(this.habilidad.id).subscribe(data =>
          {
            console.log(data);
            console.log("Se modificó la base de datos");
            //TODO validaciones
          })
    } catch (error) {
      console.log(error);
      console.log("No se modificó la base de datos")
    }
  }

  onAcept() {
    //FIXME validaciones
    //TODO Falta dar estilo
    let nombre;
    let porcentaje;

    if (document.getElementById("nombre_edition")){
      nombre = (document.getElementById("nombre_edition") as HTMLInputElement).value
    } else {
      nombre = this.habilidad.nombre
    }

    if (document.getElementById("porcentaje_edition")){
      porcentaje = (document.getElementById("porcentaje_edition") as HTMLInputElement).value
      porcentaje = Number(porcentaje)
    } else {
      porcentaje = this.habilidad.porcentaje
    }

    this.habilidadEditada  = {
      id: this.habilidad.id,
      nombre: nombre,
      porcentaje: porcentaje,
    }

    console.log(this.habilidadEditada)

    this.editable = false

    try {
      this.habilidadesService.editEHabilidad(this.habilidadEditada).subscribe(data =>
        {
          console.log(data);
          console.log("Se modificó la base de datos");
          this.habilidadesService.getHabilidadByID(this.habilidad.id).subscribe(data => {
            console.log(data);
            this.habilidad = data;
          })

          //TODO validaciones
        })
    } catch (error) {
      console.log(error);
      console.log("No se modificó la base de datos")
    }

  }


  onConfirm() {
    console.log("Se hicieron modificaciones")
    this.editable = false
    try {
          this.habilidadesService.getHabilidadByID(this.habilidad.id).subscribe(data => {
            console.log(data);
            this.habilidad = data;
          })
          //TODO validaciones
    } catch (error) {
      console.log(error);
      console.log("No se modificó la base de datos")
    }
  }


  onCancel() {

    console.log("No se hicieron modificaciones")
    this.editable = false
  }

}


