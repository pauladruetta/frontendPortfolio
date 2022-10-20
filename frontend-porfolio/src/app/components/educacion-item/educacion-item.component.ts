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
  educacionEditada: Educacion;
  visibleButton: Boolean;
  visibleItem: Boolean = true;
  fecha_fin: String;
  editable: Boolean = false;
  editable_imagen: Boolean = false;
  imagen_editada: string;

  constructor(
    private educacionService: EducacionService,
    private loginService: LoginService

  ) {
   this.loginService.toggleView.subscribe(data =>  {
    console.log('toggleView: ' +data)
    this.visibleButton = data
   })
    //console.log(this.visibleButton )
  }

  async ngOnInit() {
    this.visibleButton = this.loginService.getView();
    console.log(this.educacion.fecha_fin)
    if  (this.educacion.fecha_fin == 0) {
      console.log("actualidad")
      this.fecha_fin = "Actualidad"
    } else {
      this.fecha_fin = String(this.educacion.fecha_fin)
    }
  }

  onEdit(editable: Boolean) {
    this.editable = editable;
    this.imagen_editada = this.educacion.imagen;
    //console.log(this.imagen_editada )
  }

  onConfirm() {
    console.log("Se hicieron modificaciones")
    this.editable = false
    this.editable_imagen= false
    try {
          this.educacionService.getEducacionByID(this.educacion.id).subscribe(data => {
            //console.log("educacion: " + data);
            this.educacion = data;
          })
    } catch (error) {
      console.log(error);
      console.log("No se modificó la base de datos")
    }
  }

  // onEditImage(editable: Boolean) {
  //    //TODO Falta poder subir una imagen de perfil desde archivo - investigar - dar ambas opciones
  //   this.editable_imagen = editable;
  // }

  onDelete(elemento:any) {
    this.visibleItem = false;
    //console.log(elemento)
    //console.log(event)
    try {
        this.educacionService.deleteEducacion(this.educacion.id).subscribe(data =>
          {
            //console.log(data);
            console.log("Item Eliminado");
          })
    } catch (error) {
      console.log(error);
      console.log("No se modificó la base de datos")
    }
  }
  // onAcept() {

  //   let institucion;
  //   let pais;
  //   let titulo;
  //   let fecha_inicio;
  //   let fecha_fin;

  //   if (document.getElementById("institucion_edition")){
  //     institucion = (document.getElementById("institucion_edition") as HTMLInputElement).value
  //   } else {
  //     institucion = this.educacion.institucion
  //   }

  //   if (document.getElementById("pais_edition")){
  //     pais = (document.getElementById("pais_edition") as HTMLInputElement).value
  //   } else {
  //     pais = this.educacion.pais
  //   }
  //   if (document.getElementById("titulo_edition")){
  //     titulo = (document.getElementById("titulo_edition") as HTMLInputElement).value
  //   } else {
  //     titulo = this.educacion.titulo
  //   }
  //   if (document.getElementById("fecha_inicio_edition")){
  //     fecha_inicio = Number((document.getElementById("fecha_inicio_edition") as HTMLInputElement).value)
  //   } else {
  //     fecha_inicio = this.educacion.fecha_inicio
  //   }
  //   if (document.getElementById("fecha_fin_edition")){
  //     fecha_fin = (document.getElementById("fecha_fin_edition") as HTMLInputElement).value
  //     if (fecha_fin == "Actualidad"){
  //       fecha_fin = 0
  //     } else {
  //       fecha_fin = Number(fecha_fin)
  //     }
  //   } else {
  //     fecha_fin = this.educacion.fecha_fin
  //   }

  //   this.educacionEditada = {
  //     id: this.educacion.id,
  //     titulo: titulo,
  //     institucion: institucion,
  //     pais: pais,
  //     fecha_inicio: fecha_inicio,
  //     fecha_fin: fecha_fin,
  //     imagen:  this.imagen_editada
  //   }

  //   console.log(this.educacionEditada)

  //   this.editable = false
  //   this.editable_imagen= false

  //   try {
  //     this.educacionService.editEducacion(this.educacionEditada).subscribe(data =>
  //       {
  //         console.log(data);
  //         console.log("Se modificó la base de datos");
  //         this.educacionService.getEducacionByID(this.educacion.id).subscribe(data => {
  //           console.log(data);
  //           this.educacion = data;
  //         })
  //       })
  //   } catch (error) {
  //     console.log(error);
  //     console.log("No se modificó la base de datos")
  //   }

  // }

  // onAceptImage() {
  //   let imagen;

  //   if (document.getElementById("new_image_url")) {
  //     imagen = (document.getElementById("new_image_url") as HTMLInputElement).value
  //   } else {
  //     imagen = this.educacion.imagen
  //   }

  //   this.imagen_editada = imagen
  //   console.log( this.imagen_editada)

  //   this.editable_imagen= false
  // }

  // onCancelImage() {
  //   console.log("No se modifica la imagen")
  //   this.editable_imagen = false
  // }

  onCancel() {
    console.log("No se hicieron modificaciones")
    this.editable = false
    this.editable_imagen= false
  }

}
