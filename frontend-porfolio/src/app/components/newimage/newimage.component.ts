import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-newimage',
  templateUrl: './newimage.component.html',
  styleUrls: ['./newimage.component.sass']
})
export class NewimageComponent implements OnInit {

  editable_imagen: Boolean = false;
  @Output() SendImage: EventEmitter<string> = new EventEmitter();
  imagen_editada: string;
  @Input()  imagenRecurso: string = "";

  constructor() { }

  ngOnInit(): void {
    this.imagen_editada=this.imagenRecurso
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
      // imagen = this.Experiencia.imagen
      imagen = this.imagenRecurso
    }

    this.imagen_editada = imagen
    this.SendImage.emit(this.imagen_editada);
    console.log( this.imagen_editada)

    this.editable_imagen= false
  }

  onCancelImage() {
    console.log("No se modifica la imagen")
    this.editable_imagen = false
  }
}


