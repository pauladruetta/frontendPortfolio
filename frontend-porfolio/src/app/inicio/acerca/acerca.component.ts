import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Persona } from 'src/app/models/persona.model';
import { PersonasService } from 'src/app/services/personas.service';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.sass'],
//  encapsulation: ViewEncapsulation.None,
//encapsulation : ViewEncapsulation.ShadowDom
})
export class AcercaComponent implements OnInit {

  arrPersonas: Persona[];
  persona:  Persona;
  personaEditada: Persona;
  visibleButton: Boolean = false;
  personasHTTP: [];
  editable: {
    "imagen_perfil": Boolean,
    "person_info": Boolean,
    "acerca": Boolean
  };

  constructor(
    private personasServices: PersonasService,
    private loginService: LoginService

  ) {
   this.loginService.toggleView.subscribe(data =>  {
    console.log('toggleView')
    this.visibleButton = data
    if (data == false) {
      console.log ("Cerrando Sesión")
      this.editable.acerca = false;
      this.editable.imagen_perfil = false;
      this.editable.person_info= false;
    }
   })
    console.log(this.visibleButton )
    this.editable = {
      "imagen_perfil": false,
      "person_info": false,
      "acerca": false
    };
  }

  ngOnChanges() {

  }

  // ngOnInit(): void {
  //   // this.arrPersonas = this.personasServices.getAll();
  //   this.personasServices.getAllPromise()
  //   .then(personas => {
  //     this.arrPersonas = personas;
  //     this.persona = this.arrPersonas[0];
  //     console.log(this.arrPersonas)
  //   })
  // }

  async ngOnInit() {
    // this.arrPersonas = await this.personasServices.getAllPromise()
    this.visibleButton = this.loginService.getView();
    this.personasServices.getAllPersonas().subscribe(data => {
      this.arrPersonas = data
      this.persona = this.arrPersonas[0];
      console.log(this.arrPersonas);
    })
  }

  onEdit(editable: Boolean, element: string) {

    if (element == "acerca") {
      this.editable.acerca = editable;
    } else if (element == "person_info"){
      this.editable.person_info = editable;
    } else {
      this.editable.imagen_perfil = editable;
    }

    console.log(element)
   //FIXME Permitir editar de a un sólo campo por vez
  }

  onAcept(editable: Boolean) {
    //FIXME Cambiar para hacerlo de manera más general y con validaciones
    //TODO Falta dar estilo
    //TODO Falta poder subir una imagen de perfil desde archivo - investigar - dar ambas opciones
    //TODO Faltan campos como la edad

    let descripcion;
    let nombre;
    let apellido;
    let titulo;
    let imagen_perfil;

    if (document.getElementById("acerca_edition")){
      descripcion = (document.getElementById("acerca_edition") as HTMLTextAreaElement).value
    } else {
      descripcion = this.persona.descripcion
    }

    if (document.getElementById("person-name-editable")){
      nombre = (document.getElementById("person-name-editable") as HTMLInputElement).value
    } else {
      nombre = this.persona.nombre
    }

    if (document.getElementById("person-apellido-editable")) {
      apellido = (document.getElementById("person-apellido-editable") as HTMLInputElement).value
    } else {
      apellido = this.persona.apellido
    }

    if (document.getElementById("person-tittle-editable")) {
      titulo = (document.getElementById("person-tittle-editable") as HTMLInputElement).value
    } else {
      titulo = this.persona.titulo
    }

    if (document.getElementById("new_image_url")) {
      imagen_perfil = (document.getElementById("new_image_url") as HTMLInputElement).value
    } else {
      imagen_perfil = this.persona.imagen_perfil
    }

    this.personaEditada = {
      "id": this.persona.id,
      "nombre": nombre,
      "apellido": apellido,
      "titulo": titulo,
      "fecha_nacimiento": this.persona.fecha_nacimiento,
      "imagen_perfil": imagen_perfil,
      "imagen_portada": this.persona.imagen_portada,
      "descripcion": descripcion,
      "edad":37,
    }

    console.log(this.personaEditada)

    try {
      this.personasServices.editPersona(this.personaEditada).subscribe(data =>
        {
          console.log(data);
          console.log("Se modificó la base de datos");
          this.personasServices.getAllPersonas().subscribe(data => {
          this.arrPersonas = data
          this.persona = this.arrPersonas[0];
          console.log(this.arrPersonas);
          })
          // this.persona =  this.personaEditada

          //FIXME cada vez que guarda desde el textarea le agrega espacios
        })
    } catch (error) {
      console.log(error);
      console.log("No se modificó la base de datos")
    }

    this.editable = {
      "imagen_perfil": false,
      "person_info": false,
      "acerca": false
    };
    //FIXME Recoger información sobre la existencia o no del id,
    //si se quiere modificar una persona que no existe debe avisar

  }

  onCancel() {
    console.log("No se hicieron modificaciones")
    this.editable = {
      "imagen_perfil": false,
      "person_info": false,
      "acerca": false
    };
  }

}
