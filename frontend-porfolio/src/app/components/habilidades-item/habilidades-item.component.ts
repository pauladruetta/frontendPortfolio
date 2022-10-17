import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Habilidad } from 'src/app/models/habilidad.model';
import { HabilidadesService } from 'src/app/services/habilidades.service';
import { HabilidadPersona } from 'src/app/models/habilidadPersona.model';
import { ActualizarService } from 'src/app/services/actualizar.service';

@Component({
  selector: 'app-habilidades-item',
  templateUrl: './habilidades-item.component.html',
  styleUrls: ['./habilidades-item.component.sass']
})
export class HabilidadesItemComponent implements OnInit {


  //@Input() habilidad: Habilidad;
  @Input() habilidad: HabilidadPersona;
  visibleButton: Boolean;
  visibleItem: Boolean = true;
  editable: Boolean = false;
  habilidadEditada: Habilidad;

  constructor(
    private loginService: LoginService,
    private habilidadesService: HabilidadesService,

  ) {
   this.loginService.toggleView.subscribe(data =>  {
    console.log('toggleView')
    this.visibleButton = data
    if (!this.visibleButton){
      this.editable = false
    }
   })
  }

  async ngOnInit() {
    this.visibleButton = this.loginService.getView();
  }

  onEdit(editable: Boolean) {
    console.log(editable)
    this.editable = editable;
  }


  onDelete() {
    console.log("Item Eliminado");
    this.visibleItem = false;
    try {
        this.habilidadesService.deleteHabilidadPersona(this.habilidad.id).subscribe(data =>
          {
            //console.log(data);
            console.log("Se modificó la base de datos");
            //TODO validaciones
          })
    } catch (error) {
      console.log(error);
      console.log("No se modificó la base de datos")
    }
  }

  // onAcept() {
  //   let nombre;
  //   let porcentaje;

  //   if (document.getElementById("nombre_edition")){
  //     nombre = (document.getElementById("nombre_edition") as HTMLInputElement).value
  //   } else {
  //     nombre = this.habilidad.nombre
  //   }

  //   if (document.getElementById("porcentaje_edition")){
  //     porcentaje = (document.getElementById("porcentaje_edition") as HTMLInputElement).value
  //     porcentaje = Number(porcentaje)
  //   } else {
  //     porcentaje = this.habilidad.porcentaje
  //   }

  //   this.habilidadEditada  = {
  //     id: this.habilidad.id,
  //     nombre: nombre,
  //     porcentaje: porcentaje,
  //   }

  //   console.log(this.habilidadEditada)

  //   this.editable = false

  //   try {
  //     this.habilidadesService.editEHabilidad(this.habilidadEditada).subscribe(data =>
  //       {
  //         console.log(data);
  //         console.log("Se modificó la base de datos");
  //         this.habilidadesService.getHabilidadByID(this.habilidad.id).subscribe(data => {
  //           console.log(data);
  //           this.habilidad = data;
  //         })

  //       })
  //   } catch (error) {
  //     console.log(error);
  //     console.log("No se modificó la base de datos")
  //   }

  // }


  onConfirm() {
    console.log("Se hicieron modificaciones")
    this.editable = false
    try {
          this.habilidadesService.getHabilidadPersonaByID(this.habilidad.id).subscribe(data => {
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


