import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Experiencia } from 'src/app/models/experiencia.model';
import { ExperienciasService } from 'src/app/services/experiencias.service';

@Component({
  selector: 'app-experiencia-item',
  templateUrl: './experiencia-item.component.html',
  styleUrls: ['./experiencia-item.component.sass']
})
export class ExperienciaItemComponent implements OnInit {

  @Input() experiencia:  Experiencia;
  experienciaEditada: Experiencia;
  visibleButton: Boolean;
  visibleItem: Boolean = true;
  editable: Boolean = false;
  fecha_fin: String;
  editable_imagen: Boolean = false;
  imagen_editada: string;

  constructor(
    private loginService: LoginService,
    private experienciasServise: ExperienciasService,

  ) {
   this.loginService.toggleView.subscribe(data =>  {
    console.log('toggleView')
    this.visibleButton = data
   })

  }

  async ngOnInit() {
    this.visibleButton = this.loginService.getView();
    console.log(this.visibleButton )
    console.log(this.experiencia )
    if  (this.experiencia.fecha_fin == 0) {
      this.fecha_fin = "Actualidad"
    } else {
      this.fecha_fin = String(this.experiencia.fecha_fin)
    }

  }

  onEdit(editable: Boolean) {
    this.editable = editable;
    this.imagen_editada = this.experiencia.imagen;
    console.log(this.imagen_editada )
  }

//   onEditImage(editable: Boolean) {
//    this.editable_imagen = editable;
//  }

//  onAceptImage() {
//   let imagen;

//   if (document.getElementById("new_image_url")) {
//     imagen = (document.getElementById("new_image_url") as HTMLInputElement).value
//   } else {
//     imagen = this.experiencia.imagen
//   }

//   this.imagen_editada = imagen
//   console.log( this.imagen_editada)

//   this.editable_imagen= false
// }

// onCancelImage() {
//   console.log("No se modifica la imagen")
//   console.log( this.imagen_editada)

//   this.editable_imagen= false
// }


  onDelete() {
    this.visibleItem = false;
    try {
        this.experienciasServise.deleteExperiencia(this.experiencia.id).subscribe(data =>
          {
            console.log(data);
            console.log("Item Eliminado");
            //TODO validaciones
          })
    } catch (error) {
      console.log(error);
      console.log("No se modificó la base de datos")
    }
  }

  // onAcept() {
  //   let empresa;
  //   let tipo;
  //   let pais;
  //   let titulo;
  //   let provincia;
  //   let fecha_inicio;
  //   let fecha_fin;

  //   if (document.getElementById("empresa_edition")){
  //     empresa = (document.getElementById("empresa_edition") as HTMLInputElement).value
  //   } else {
  //     empresa = this.experiencia.empresa
  //   }

  //   if (document.getElementById("tipo_edition")){
  //     tipo = (document.getElementById("tipo_edition") as HTMLInputElement).value
  //   } else {
  //     tipo = this.experiencia.tipo
  //   }
  //   if (document.getElementById("pais_edition")){
  //     pais = (document.getElementById("pais_edition") as HTMLInputElement).value
  //   } else {
  //     pais = this.experiencia.pais
  //   }
  //   if (document.getElementById("titulo_edition")){
  //     titulo = (document.getElementById("titulo_edition") as HTMLInputElement).value
  //   } else {
  //     titulo = this.experiencia.titulo
  //   }
  //   if (document.getElementById("provincia_edition")){
  //     provincia = (document.getElementById("provincia_edition") as HTMLInputElement).value
  //   } else {
  //     provincia = this.experiencia.provincia
  //   }
  //   if (document.getElementById("fecha_inicio_edition")){
  //     fecha_inicio = Number((document.getElementById("fecha_inicio_edition") as HTMLInputElement).value)
  //   } else {
  //     fecha_inicio = this.experiencia.fecha_inicio
  //   }
  //   if (document.getElementById("fecha_fin_edition")){
  //     fecha_fin = (document.getElementById("fecha_fin_edition") as HTMLInputElement).value
  //     if (fecha_fin == "Actualidad"){
  //       fecha_fin = 0
  //     } else {
  //       fecha_fin = Number(fecha_fin)
  //     }
  //   } else {
  //     fecha_fin = this.experiencia.fecha_fin
  //   }

  //   this.experienciaEditada = {
  //     id: this.experiencia.id,
  //     titulo: titulo,
  //     empresa: empresa,
  //     tipo: tipo,
  //     pais: pais,
  //     provincia:  provincia,
  //     fecha_inicio: fecha_inicio,
  //     fecha_fin: fecha_fin,
  //     imagen:  this.imagen_editada
  //   }

  //   console.log(this.experienciaEditada)

  //   this.editable = false
  //   this.editable_imagen= false

  //   try {
  //     this.experienciasServise.editExperiencia(this.experienciaEditada).subscribe(data =>
  //       {
  //         console.log(data);
  //         console.log("Se modificó la base de datos");
  //         this.experienciasServise.getExperienciaByID(this.experiencia.id).subscribe(data => {
  //           console.log(data);
  //           this.experiencia = data;
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
    this.editable_imagen= false
    try {
          this.experienciasServise.getExperienciaByID(this.experiencia.id).subscribe(data => {
            console.log(data);
            this.experiencia = data;
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
    this.editable_imagen= false
  }

}
