import { Component, Input, OnInit } from '@angular/core';
import { Habilidad } from 'src/app/models/habilidad.model';
import { HabilidadPersona } from 'src/app/models/habilidadPersona.model';
import { Persona } from 'src/app/models/persona.model';
import { ActualizarService } from 'src/app/services/actualizar.service';
import { HabilidadesService } from 'src/app/services/habilidades.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.sass']
})
export class HabilidadesComponent implements OnInit {

  //@Input() habilidades: Habilidad[];
  arrHabilidad: Habilidad[];
  arrHabilidadPersona: HabilidadPersona[];
  @Input() persona: Persona;
  visibleButton: Boolean = false;
  agregandoNuevo: Boolean = false;

  constructor(
    private habilidadesService: HabilidadesService,
    private loginService: LoginService,
    private actualizarService: ActualizarService
  ) {

    //this.visibleButton = this.loginService.getView();
    //console.log(this.visibleButton )

    this.loginService.toggleView.subscribe(data =>  {
      console.log('toggleView')
      this.visibleButton = data
    })

    //this.actualizarService.getInfoBD()
      // this.habilidadesService.getAllHabilidades().subscribe(data => {
      //   this.arrHabilidad = data;
      //   //console.log(this.arrHabilidad);
      // })
      //this.getHabilidades()
    //})

    //TODO ver que pasa
  }

  async ngOnInit() {

    // this.habilidadesService.getAllHabilidades().subscribe(data => {
    //   this.arrHabilidad = data;
    //   //console.log(this.arrHabilidad);
    // })

    this.visibleButton = this.loginService.getView();
    this.getHabilidades()
    // this.habilidadesService.refreshHabilidades()
    // this.arrHabilidad = this.habilidadesService.getAllHabilidades();
    //console.log(this.arrHabilidad);
    // })
    //console.log();
  }

  getHabilidades() {
    if(this.persona.id != null){
      this.habilidadesService.getHabilidadesByPersona(this.persona.id!).subscribe(data => {
        this.arrHabilidadPersona = data;
        //console.log(this.arrHabilidadPersona);
      })
    }
  }

  onAdd(agregandoNuevo: Boolean) {
    this.agregandoNuevo = agregandoNuevo;
  }

  onCancelAdd() {
    console.log("No se Agregó nueva Habilidad");
    this.agregandoNuevo = false;
    // this.agregandoNuevo = false
  }

  onAddConfirm(){
    this.agregandoNuevo = false;
    this.getHabilidades()
   // this.habilidadesService.refreshHabilidades()
    // this.habilidadesService.getAllHabilidades().subscribe(data => {
    //   this.arrHabilidad = data;
    //   //console.log(this.arrHabilidad);
    // })
  }
}
