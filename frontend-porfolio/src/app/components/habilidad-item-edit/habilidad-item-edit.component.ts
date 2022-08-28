import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Habilidad } from 'src/app/models/habilidad.model';
import { HabilidadesService } from 'src/app/services/habilidades.service';

@Component({
  selector: 'app-habilidad-item-edit',
  templateUrl: './habilidad-item-edit.component.html',
  styleUrls: ['./habilidad-item-edit.component.sass']
})
export class HabilidadItemEditComponent implements OnInit {
  @Input()Habilidad: Habilidad = {
    id: 0,
    nombre: "",
    porcentaje: 0
  };
  @Input() editando: boolean = true;
  @Output() onClickAcept: EventEmitter<Boolean> = new EventEmitter()
  @Output() onClickCancel: EventEmitter<Boolean> = new EventEmitter();
  Nuevo: Habilidad;
  formulario: FormGroup;

  constructor(
    private habilidadesService: HabilidadesService
  ) {

  }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      id: new FormControl(this.Habilidad.id,),
      nombre: new FormControl(this.Habilidad.nombre,[
        Validators.required
      ]),
      porcentaje: new FormControl(this.Habilidad.porcentaje,),
    })
  }

  onAcept() {
    this.Nuevo = {
      id: this.Habilidad.id,
      nombre: this.formulario.value.nombre,
      porcentaje: this.formulario.value.porcentaje,
    };

    let accion;

    if (this.editando){
      accion = "Editando"
    } else {
      accion = "Agregando"
    }

    console.log(accion +" habilidad item" )

    try {

      if (this.editando){
        console.log("Editando")
        this.habilidadesService.editEHabilidad(this.Nuevo).subscribe(data =>
          {
            console.log(data);
            console.log("Se modificó la base de datos");
            //TODO validaciones
            console.log(this.Nuevo)
            this.onClickAcept.emit();
          })
      } else {
        console.log("Agregando Nuevo")
        this.habilidadesService.addhabilidad(this.Nuevo).subscribe(data =>
          {
            console.log(data);
            console.log("Se modificó la base de datos");
            //TODO validaciones
            console.log(this.Nuevo)
            this.onClickAcept.emit();
          })
      }

    } catch (error) {
      console.log("catch")
      console.log(error);
      console.log("No se modificó la base de datos")
    }
  }

  onCancel() {
    console.log("No se hicieron modificaciones")
    this.editando = false;
    this.onClickCancel.emit();
  }
}
