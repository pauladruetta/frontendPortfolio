import { Component, OnInit } from '@angular/core';
import { Habilidad } from 'src/app/models/habilidad.model';
import { HabilidadesService } from 'src/app/services/habilidades.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.sass']
})
export class HabilidadesComponent implements OnInit {

  arrHabilidad: Habilidad[];
  visibleButton: Boolean = false;
  agregandoNuevo: Boolean = false;

  constructor(
    private habilidadesService: HabilidadesService,
    private loginService: LoginService
  ) {
    this.loginService.toggleView.subscribe(data =>  {
      console.log('toggleView')
      this.visibleButton = data
    })
      console.log(this.visibleButton )
  }

  async ngOnInit() {

    this.habilidadesService.getAllHabilidades().subscribe(data => {
      this.arrHabilidad = data;
      console.log(this.arrHabilidad);
    })

    console.log();
  }

  onAdd(agregandoNuevo: Boolean) {
    this.agregandoNuevo = agregandoNuevo;
  }

  onCancelAdd() {
    //TODO Falta dar estilo
    console.log("No se Agregó nueva Habilidad");
    this.agregandoNuevo = false;
    // this.agregandoNuevo = false
  }

  onAddConfirm(){
    this.agregandoNuevo = false;
    this.habilidadesService.getAllHabilidades().subscribe(data => {
      this.arrHabilidad = data;
      console.log(this.arrHabilidad);
    })
  }
}
