import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Educacion } from 'src/app/models/educacion.model';
import { EducacionService } from 'src/app/services/educacion.service';


@Component({
  selector: 'app-educacion-item-edit',
  templateUrl: './educacion-item-edit.component.html',
  styleUrls: ['./educacion-item-edit.component.sass']
})
export class EducacionItemEditComponent implements OnInit {

  @Input()Educacion: Educacion = {
    id: 0,
    titulo: "",
    institucion: "",
    fecha_inicio: 0,
    fecha_fin: 0,
    pais: "",
    imagen: ""
  };
  @Input() editando: boolean = true;
  @Output() onClickAcept: EventEmitter<Boolean> = new EventEmitter();
  @Output() onClickCancel: EventEmitter<Boolean> = new EventEmitter();
  educacionNueva: Educacion;
  formulario: FormGroup;
  editable_imagen: Boolean = false;
  imagen_editada: string;

  constructor(
    private educacionService: EducacionService,
  ) {

  }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      id: new FormControl(this.Educacion.id,),
      titulo: new FormControl(this.Educacion.titulo,[
        Validators.required
      ]),
      institucion: new FormControl(this.Educacion.institucion,),
      pais: new FormControl(this.Educacion.pais,),
      fecha_inicio: new FormControl(this.Educacion.fecha_inicio,),
      fecha_fin: new FormControl(this.Educacion.fecha_fin,),
    })
    this.imagen_editada = this.Educacion.imagen;
//TODO Validaciones
    console.log(this.Educacion);
    console.log(this.formulario);
  }

  onAcept() {
    this.educacionNueva = {
      id: this.Educacion.id,
      titulo: this.formulario.value.titulo,
      institucion: this.formulario.value.institucion,
      pais: this.formulario.value.pais,
      fecha_inicio: this.formulario.value.fecha_inicio,
      fecha_fin: this.formulario.value.fecha_fin,
      imagen: this.imagen_editada,
    };

    let accion;

    if (this.editando){
      accion = "Editando"
    } else {
      accion = "Agregando"
    }

    console.log(accion +" educaion item" )
    try {
      if (this.editando){
        console.log("Editando")
        this.educacionService.editEducacion(this.educacionNueva).subscribe(data =>
          {
            console.log(data);
            console.log("Se modificó la base de datos");
            //TODO validaciones
            console.log(this.educacionNueva)
            this.onClickAcept.emit();
          })
      } else {
        console.log("Agregando Nuevo")
        this.educacionService.addEducacion(this.educacionNueva).subscribe(data =>
          {
            console.log(data);
            console.log("Se modificó la base de datos");
            //TODO validaciones
            console.log(this.educacionNueva)
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
    //TODO Falta dar estilo
    console.log("No se hicieron modificaciones")
    this.editando = false;
    this.editable_imagen= false;
    this.onClickCancel.emit();
  }

  onEditImage(editable: Boolean) {
      //TODO Falta poder subir una imagen de perfil desde archivo - investigar - dar ambas opciones
    this.editable_imagen = editable;
  }

  onAceptImage() {
    let imagen;

    if (document.getElementById("new_image_url")) {
      imagen = (document.getElementById("new_image_url") as HTMLInputElement).value
    } else {
      imagen = this.Educacion.imagen
    }

    this.imagen_editada = imagen
    console.log( this.imagen_editada)

    this.editable_imagen= false
  }

  onCancelImage() {
    //TODO Falta dar estilo
    console.log("No se modifica la imagen")
    this.editable_imagen = false
  }

}
