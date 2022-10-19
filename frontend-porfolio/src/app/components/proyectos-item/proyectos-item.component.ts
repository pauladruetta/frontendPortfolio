import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Proyecto } from 'src/app/models/proyecto.model';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-proyectos-item',
  templateUrl: './proyectos-item.component.html',
  styleUrls: ['./proyectos-item.component.sass']
})
export class ProyectosItemComponent implements OnInit {

  @Input() proyecto: Proyecto;
  proyectoEditado: Proyecto;
  visibleButton: Boolean;
  visibleItem: Boolean = true;
  editable: Boolean = false;
  editable_imagen: Boolean = false;
  imagen_editada: string;

  constructor(
    private loginService: LoginService,
    private proyectoServise: ProyectosService

  ) {
   this.loginService.toggleView.subscribe(data =>  {
    console.log('toggleView')
    this.visibleButton = data
    if (!this.visibleButton){
      this.editable = false
    }
   })
    //console.log(this.visibleButton )
  }

  async ngOnInit() {

    this.visibleButton = this.loginService.getView();
    //console.log(this.proyecto )
    // ;
    // var length = this.proyecto.habilidades.length;
    // for (let i = 0; i < length; i++) {
    //   alert(this.proyecto.habilidades[i].nombre);
    //   for (j = 0 j < $scope.datosComp[i].paralelos.length; j++) {
    //     alert($scope.datosComp[i].paralelos[j].paralelo); //console.log() es mejor :)
    //   }
    // };


  //  this.proyecto.habilidades.forEach((Habilidad) => {
  //   console.log(Habilidad)
  //   this.habilidades.push(Habilidad)
  //  })
  }

  onEdit(editable: Boolean) {
    this.editable = editable;
    this.imagen_editada = this.proyecto.imagen;
    //console.log(this.imagen_editada )
  }

  onDelete() {
    this.visibleItem = false;
    try {
        this.proyectoServise.deleteProyecto(this.proyecto.id).subscribe(data =>
          {
            //console.log(data);
            console.log("Item Eliminado");
            //TODO validaciones
          })
    } catch (error) {
      console.log(error);
      console.log("No se modificó la base de datos")
    }
  }

  // onAcept() {
  //   let descripcion;
  //   let titulo;
  //   let url;
  //   let fecha;

  //   if (document.getElementById("descripcion_edition")){
  //     descripcion = (document.getElementById("descripcion_edition") as HTMLInputElement).value
  //   } else {
  //     descripcion = this.proyecto.descripcion
  //   }
  //   if (document.getElementById("url_edition")){
  //     url = (document.getElementById("url_edition") as HTMLInputElement).value
  //   } else {
  //     url = this.proyecto.url
  //   }
  //   if (document.getElementById("titulo_edition")){
  //     titulo = (document.getElementById("titulo_edition") as HTMLInputElement).value
  //   } else {
  //     titulo = this.proyecto.titulo
  //   }
  //   if (document.getElementById("fecha_edition")){
  //     fecha = Number((document.getElementById("fecha_edition") as HTMLInputElement).value)
  //   } else {
  //     fecha = this.proyecto.fecha
  //   }

  //   this.proyectoEditado = {
  //     id: this.proyecto.id,
  //     titulo: titulo,
  //     url: url,
  //     descripcion: descripcion,
  //     fecha: fecha,
  //     imagen:  this.imagen_editada,
  //     habilidades: this.proyecto.habilidades
  //   }

  //   console.log(this.proyectoEditado.habilidades)

  //   this.editable = false
  //   this.editable_imagen= false


  //   try {
  //     this.proyectoServise.editProyecto(this.proyectoEditado).subscribe(data =>
  //       {
  //         console.log(data);
  //         console.log("Se modificó la base de datos");
  //         this.proyectoServise.getProyectoByID(this.proyecto.id).subscribe(data => {
  //           console.log(data);
  //           this.proyecto = data;
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
          this.proyectoServise.getProyectoByID(this.proyecto.id).subscribe(data => {
            //console.log(data);
            this.proyecto = data;
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
