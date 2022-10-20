import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Experiencia } from 'src/app/models/experiencia.model';
import { Persona } from 'src/app/models/persona.model';
import { EditionService } from 'src/app/services/edition.service';
import { ExperienciasService } from 'src/app/services/experiencias.service';

@Component({
  selector: 'app-experiencia-item-edit',
  templateUrl: './experiencia-item-edit.component.html',
  styleUrls: ['./experiencia-item-edit.component.sass']
})
export class ExperienciaItemEditComponent implements OnInit {

/*   @Input()Experiencia: Experiencia = {
    id: 0,
    titulo: "",
    empresa: "",
    tipo: "",
    pais: "",
    provincia: "",
    fecha_fin: 0,
    fecha_inicio: 0,
    imagen: "",
  }; */
  @Input() Experiencia: Experiencia = {} as Experiencia;
  @Input() Persona: Persona = {} as Persona;
  @Input() editando: boolean = true;
  @Output() onClickAcept: EventEmitter<Boolean> = new EventEmitter();
  @Output() onClickCancel: EventEmitter<Boolean> = new EventEmitter();
  Nuevo: Experiencia;
  editable_imagen: Boolean = false;
  imagen_editada: string;
  formulario: FormGroup;

  constructor(
    private experienciasService: ExperienciasService,
    private editionService: EditionService
  ) {

  }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      id: new FormControl(this.Experiencia.id,),
      titulo: new FormControl(this.Experiencia.titulo,[
        Validators.required
      ]),
      empresa: new FormControl(this.Experiencia.empresa,),
      tipo: new FormControl(this.Experiencia.tipo,),
      pais: new FormControl(this.Experiencia.pais,),
      provincia: new FormControl(this.Experiencia.provincia,),
      fecha_inicio: new FormControl(this.Experiencia.fecha_inicio,),
      fecha_fin: new FormControl(this.Experiencia.fecha_fin,),
    })
    this.imagen_editada = this.Experiencia.imagen;
    //TODO Validaciones
    //console.log(this.Experiencia);
    //console.log(this.formulario);
  }

  onAcept() {
    //this.editable = false
    this.Nuevo = {
      id: this.Experiencia.id,
      titulo: this.formulario.value.titulo,
      empresa: this.formulario.value.empresa,
      tipo: this.formulario.value.tipo,
      pais: this.formulario.value.pais,
      provincia: this.formulario.value.provincia,
      fecha_inicio: this.formulario.value.fecha_inicio,
      fecha_fin: this.formulario.value.fecha_fin,
      imagen:  this.imagen_editada,
      persona: this.Experiencia.persona
    };
    //console.log(this.Experiencia.persona)

    let accion;

    if (this.editando){
      accion = "Editando"
    } else {
      accion = "Agregando"
      this.Nuevo.persona = this.Persona;
    }

    console.log(accion +" experiencia item" )
    try {

      if (this.editando){
        console.log("Editando")
        this.experienciasService.editExperiencia(this.Nuevo).subscribe(data =>
          {
            //console.log(data);
            console.log("Se modificó la base de datos");
            //TODO validaciones
            //console.log(this.Nuevo)
            this.onClickAcept.emit();
          })
      } else {
        console.log("Agregando Nuevo")
        this.experienciasService.addExperiencia(this.Nuevo).subscribe(data =>
          {
            //console.log(data);
            console.log("Se modificó la base de datos");
            //TODO validaciones
            //console.log(this.Nuevo)
            this.onClickAcept.emit();
          })
      }
      this.onDisactivete()
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

  onSendImage(imagen: string) {
    console.log("llegó")
    this.imagen_editada = imagen;
  }


  onDisactivete() {
    console.log("activar botón")
    this.editionService.sendDesactivete(true)
  }


}
