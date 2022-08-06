import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/models/experiencia.model';
import { ExperienciasService } from 'src/app/services/experiencias.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.sass']
})
export class ExperienciaComponent implements OnInit {

  arrExperiencias: Experiencia[];
  visibleButton: Boolean = false;
  agregandoNuevo: Boolean = false;

  constructor(
    private experienciasServise: ExperienciasService,
    private loginService: LoginService
    ) {
      this.loginService.toggleView.subscribe(data =>  {
        console.log('toggleView')
        this.visibleButton = data
      })
        console.log(this.visibleButton )
    }

  async ngOnInit() {

    this.experienciasServise.getAllExperiencias().subscribe(data => {
      this.arrExperiencias = data;
      console.log(this.arrExperiencias);
    })

    console.log();
  }

  onAdd(agregandoNuevo: Boolean) {
    this.agregandoNuevo = agregandoNuevo;
  }

  onCancelAdd() {
    //TODO Falta dar estilo
    console.log("No se Agregó nueva experiencia");
    this.agregandoNuevo = false;
    // this.agregandoNuevo = false
  }

  onAddConfirm(){
    this.agregandoNuevo = false;
    this.experienciasServise.getAllExperiencias().subscribe(data => {
      this.arrExperiencias = data;
      console.log(this.arrExperiencias);
    })
  }

}
