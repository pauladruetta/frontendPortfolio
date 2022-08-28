import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Habilidad } from 'src/app/models/habilidad.model';
import { Proyecto } from 'src/app/models/proyecto.model';
import { ActualizarService } from 'src/app/services/actualizar.service';
import { HabilidadesService } from 'src/app/services/habilidades.service';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-proyecto-item-edit',
  templateUrl: './proyecto-item-edit.component.html',
  styleUrls: ['./proyecto-item-edit.component.sass']
})
export class ProyectoItemEditComponent implements OnInit {

  @Input()Proyecto: Proyecto = {
    id: 0,
    titulo: "",
    url: "",
    fecha: 0,
    descripcion: "",
    imagen: "",
    habilidades: []
  };
  @Input() editando: boolean = true;
  @Output() onClickAcept: EventEmitter<Boolean> = new EventEmitter();
  @Output() onClickCancel: EventEmitter<Boolean> = new EventEmitter();

  Nuevo: Proyecto;
  formulario: FormGroup;
  // habilidadesNombres: Array<string> = [];
  // habilidades: Array<Habilidad> = [];
  editable_imagen: Boolean = false;
  imagen_editada: string;
  agregando_habilidad: Boolean = false;
  writeNew: Boolean = false;
  arrHabilidades: Habilidad[] = [];

  constructor(
    private proyectosService: ProyectosService,
    private habilidadService: HabilidadesService,
    private actualizarService: ActualizarService
  ) {
    habilidadService.getAllHabilidades().subscribe(habilidades  => this.arrHabilidades = habilidades)
    //this.arrHabilidades = hablidadService.getAllHabilidades();

  }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      id: new FormControl(this.Proyecto.id,),
      titulo: new FormControl(this.Proyecto.titulo,[
        Validators.required
      ]),
      url: new FormControl(this.Proyecto.url,),
      fecha: new FormControl(this.Proyecto.fecha,),
      descripcion: new FormControl(this.Proyecto.descripcion,),
      habilidades: new FormArray([],),
      imagen: new FormControl( this.Proyecto.imagen),
      added_habilidad: new FormControl(''),
      nueva_habilidad: new FormControl('')
    })
    // this.habilidades = this.Proyecto.habilidades;
    let refHab = this.formulario.get('habilidades') as FormArray
    this.Proyecto.habilidades.forEach(habilidad => {
      // this.habilidadesNombres.push(habilidad.nombre)
      refHab.push(this.initFormHabilidad(habilidad))
    })
    // this.imagen_editada = this.Proyecto.imagen;
//TODO Validaciones
    console.log(this.Proyecto);
    console.log(this.formulario);
    // if(this.Proyecto.id == 0){
    //   this.habilidades_edit = true
    // };
  }

/*   initFormHabilidad(habilidad: String): FormGroup {
    return new FormGroup(
      {
        nombre: new FormControl(habilidad)
      }
    )
  } */

  initFormHabilidad(habilidad: String): FormControl {
    return new FormControl(habilidad)
  }

  getCtrl(key: string, form: FormGroup): any {
    return form.get(key)
  }

  onAcept() {
    this.Nuevo = {
      id: this.Proyecto.id,
      titulo: this.formulario.value.titulo,
      url: this.formulario.value.url,
      fecha: this.formulario.value.fecha,
      descripcion: this.formulario.value.descripcion,
      imagen: this.imagen_editada,
      // habilidades: this.habilidades,
      habilidades: this.formulario.value.habilidades
    };
//TODO Encontrar la forma de reutilizar código, estoy copiando y pegando mucho entre las distintas partes
    let accion;

    if (this.editando){
      accion = "Editando"
    } else {
      accion = "Agregando"
    }

    console.log(accion +" proyecto item" )

    try {

      if (this.editando){
        console.log("Editando")
        console.log(this.Nuevo)
        this.proyectosService.editProyecto(this.Nuevo).subscribe(data =>
          {
            console.log(data);
            console.log("Se modificó la base de datos");
            //TODO validaciones
            console.log(this.Nuevo)
            this.onClickAcept.emit();
            this.actualizarService.getInfoBD()
          })
      } else {
        console.log("Agregando Nuevo")
        this.proyectosService.addProyecto(this.Nuevo).subscribe(data =>
          {
            console.log(data);
            console.log("Se modificó la base de datos");
            //TODO validaciones
            console.log(this.Nuevo)
            this.onClickAcept.emit();
            this.actualizarService.getInfoBD()
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
    this.editable_imagen= false;
    this.onClickCancel.emit();
  }

  OnAddHabilidad($event: any) {
    $event.preventDefault();
    let nueva;
    if (this.writeNew == true) {
      nueva = this.formulario.get('nueva_habilidad') as FormControl;
      this.writeNew = false;
    } else {
      nueva = this.formulario.get('added_habilidad') as FormControl;
    }
    console.log(nueva)
    console.log(nueva.value)
    console.log("Nueva Habilidad de proyecto");
    if (nueva.value == "nueva" ){
      this.writeNew = true;
    } else {
      let refHab = this.formulario.get('habilidades') as FormArray;
      /*     let habilidad: FormGroup = new FormGroup(
            {
              nombre: new FormControl(nueva.value)
            });
            console.log(habilidad); */
            let habilidad: FormControl = new FormControl(nueva.value)
            console.log(habilidad);
          refHab.push(habilidad);
          console.log(refHab);
    }



    // let habilidad = (document.getElementById("nueva_habilidad") as HTMLInputElement).value
    // this.habilidadesNombres.push(habilidad)
    //En el caso de que exista buscarla y rellenar
    // this.habilidades.push({id: 0 , nombre: habilidad, porcentaje: 10})
    //Si no existe pedir agregar un porcentaje
  }

  OnAdd($event: any) {
    console.log("Nueva Habilidad en proyecto editado")
    this.agregando_habilidad = true
  }

  // onDelete(habilidad: string){
  //   console.log("Se borró habilidad" + habilidad)
  //   this.habilidadesNombres = this.habilidadesNombres.filter(nombre => nombre != habilidad)
  //   console.log( this.habilidadesNombres)
  // }

  OnHover($event: any) {
    console.log("Hover")
  }

  onDelete(habilidad: FormControl){
    console.log(habilidad);
    console.log("Se borró habilidad " + habilidad.value.nombre);
    let refHab = this.formulario.get('habilidades') as FormArray;
    // for (let hab of this.getCtrl('habilidades', this.formulario)?.controls) {
    refHab.removeAt(habilidad.value)
    // }
    console.log(this.formulario);
  }


//   onEditImage(editable: Boolean) {
//    this.editable_imagen = editable;
//  }

//  onAceptImage() {
//   let imagen;

//   if (document.getElementById("new_image_url")) {
//     imagen = (document.getElementById("new_image_url") as HTMLInputElement).value
//   } else {
//     imagen = this.Proyecto.imagen
//   }

//   this.imagen_editada = imagen
//   console.log( this.imagen_editada)

//   this.editable_imagen= false
// }

// onCancelImage() {
//   console.log("No se modifica la imagen")
//   this.editable_imagen = false
// }
onSendImage(imagen: string) {
  console.log("llegó")
  this.imagen_editada = imagen;
}
}
