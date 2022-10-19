import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Habilidad } from 'src/app/models/habilidad.model';
import { HabilidadPersona } from 'src/app/models/habilidadPersona.model';
import { Persona } from 'src/app/models/persona.model';
import { ActualizarService } from 'src/app/services/actualizar.service';
import { EditionService } from 'src/app/services/edition.service';
import { HabilidadesService } from 'src/app/services/habilidades.service';

@Component({
  selector: 'app-habilidad-item-edit',
  templateUrl: './habilidad-item-edit.component.html',
  styleUrls: ['./habilidad-item-edit.component.sass']
})
export class HabilidadItemEditComponent implements OnInit {
 //@Input()Habilidad: Habilidad = {} as Habilidad;
 @Input()Habilidad: HabilidadPersona = {} as HabilidadPersona;
  @Input() Persona: Persona = {} as Persona;
  @Input() editando: boolean = true;
  @Output() onClickAcept: EventEmitter<Boolean> = new EventEmitter()
  @Output() onClickCancel: EventEmitter<Boolean> = new EventEmitter();
  Nuevo: HabilidadPersona;
  arrHabilidades: Habilidad[] = [];
  arrHabilidadesNuevas: Habilidad[] = [];
  formulario: FormGroup;
  writeNew: Boolean = false;
  existe: Boolean = false;
  //idModel: string;
  model: any;

  constructor(
    private habilidadesService: HabilidadesService,
    private editionService: EditionService,
    private actualizarService: ActualizarService


  ) {
    // habilidadesService.getAllHabilidades().subscribe(habilidades  => {
    //   habilidades.forEach(habilidad => this.arrHabilidades.push(habilidad))
    // })
  }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      id: new FormControl(this.Habilidad.id,),
      nombre: new FormControl("",[
        Validators.required
      ]),
      porcentaje: new FormControl(this.Habilidad.porcentaje,),
      added_habilidad: new FormControl(''),
      nueva_habilidad: new FormControl(''),
    })
    this.formulario.valueChanges.subscribe(changes => {
      console.log(changes)
      if (changes.added_habilidad == "nueva") {
        this.writeNew = true;
      }
    });
    console.log(this.Habilidad)
    console.log(this.Persona.id)
    this.habilidadesService.getAllHabilidadesQueNo(this.Persona.id).subscribe(data =>
      this.arrHabilidadesNuevas = data
    )
    this.habilidadesService.getAllHabilidades().subscribe(data =>
      this.arrHabilidades = data
    )
    // this.idModel="confirmElement";
    // this.model = document.getElementById(this.idModel)
    // console.log(this.model)
    //this.actualizarService.getInfoBD()
      // this.habilidadesService.getAllHabilidades().subscribe(data => {
      //   this.arrHabilidad = data;
      //   //console.log(this.arrHabilidad);
      // })
      //this.getHabilidades()

  }

  onAcept() {

    // this.Nuevo = {
    //   id: this.Habilidad.id,
    //   habilidad: this.Habilidad.habilidad,
    //   persona: this.Habilidad.persona,
    //   porcentaje: this.formulario.value.porcentaje,
    //   //persona: this.Habilidad.persona
    // };

    let accion;

    if (this.editando){
      accion = "Editando"
      this.Nuevo = {
        id: this.Habilidad.id,
        habilidad: this.Habilidad.habilidad,
        persona: this.Habilidad.persona,
        porcentaje: this.formulario.value.porcentaje,
        //persona: this.Habilidad.persona
      };
    } else {
      accion = "Agregando"
      let nueva;
      if (this.writeNew == true) {
        this.arrHabilidades.forEach(hab => {
          console.log(this.formulario.get('nueva_habilidad')?.value )
          console.log(hab.nombre )
          if (this.formulario.get('nueva_habilidad')?.value == hab.nombre){
            this.existe = true;
            console.log("existe")
          }
        });
        if (this.existe){
          console.log("Es una habilidad que ya existe")
          nueva = this.formulario.get('added_habilidad') as FormControl;
        } else {
          nueva = this.formulario.get('nueva_habilidad') as FormControl;
          this.writeNew = false;
          console.log("Es una habilidad nueva")
        }
      } else {
        console.log("No es una habilidad nueva")
        nueva = this.formulario.get('added_habilidad') as FormControl;
      }
      this.Nuevo = {
        id: this.Habilidad.id,
        habilidad: {
          nombre: nueva.value,
        },
        persona: this.Persona,
        porcentaje: this.formulario.value.porcentaje,
        //persona: this.Habilidad.persona
      };

      //FIXME permite agregar dos veces la misma habilidad
      //this.Nuevo.persona = this.Persona;
    }

    console.log(accion +" habilidad item" )
    if (!this.existe){
      try {
        console.log(this.Nuevo)
        if (this.editando){
          console.log("Editando")
          this.habilidadesService.editHabilidadPersona(this.Nuevo).subscribe(data =>
            {
              //console.log(data);
              console.log("Se modificó la base de datos");
              //TODO validaciones
              //console.log(this.Nuevo)
              this.onClickAcept.emit();
            })
        } else {
          console.log("Agregando Nuevo")
        //   this.habilidadesService.addhabilidad(this.Nuevo).subscribe(data =>
        //     {
        //       //console.log(data);
        //       console.log("Se modificó la base de datos");
        //       //TODO validaciones
        //       //console.log(this.Nuevo)
        //       this.onClickAcept.emit();
        //     })
        // }
        this.habilidadesService.addHabilidadPersona(this.Nuevo).subscribe(data =>
          {
            //console.log(data);
            console.log("Se modificó la base de datos");
            //TODO validaciones
            this.onClickAcept.emit();
          })
      }
        this.onDisactivete()
        this.actualizarService.getInfoBD()
      } catch (error) {
        console.log("catch")
        console.log(error);
        console.log("No se modificó la base de datos")
      }
    } else {
      console.log("no se puede agregar")
      setTimeout(()=> this.existe = false, 2000)

    }
    this.actualizarService.getInfoBD()
  }

  onCancel() {
    console.log("No se hicieron modificaciones")
    this.editando = false;
    this.onClickCancel.emit();
  }
  onDisactivete() {
    console.log("activar botón")
    this.editionService.sendDesactivete(true)
  }

  OnAccion(isAcepted: Boolean) {
    if (isAcepted) {
      console.log("acepted")
      //console.log(isAcepted)
      //console.log(this.element)
      //this.mostrarModal()
    } else {
      console.log("no acepted")
    }
  }

}
