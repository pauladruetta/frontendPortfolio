import { Component, Input, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/models/experiencia.model';
import { Persona } from 'src/app/models/persona.model';
import { ExperienciasService } from 'src/app/services/experiencias.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.sass']
})
export class ExperienciaComponent implements OnInit {

  arrExperiencias: Experiencia[];
  @Input() persona: Persona;
  visibleButton: Boolean = false;
  agregandoNuevo: Boolean = false;

  constructor(
    private experienciasServise: ExperienciasService,
    private loginService: LoginService
    ) {
      this.loginService.toggleView.subscribe(data =>  {
        console.log('toggleView: '+ data)
        this.visibleButton = data
      })
      // this.visibleButton = this.loginService.getView();
      // console.log(this.visibleButton )
      //   console.log(this.visibleButton )
    }

  async ngOnInit() {
    this.visibleButton = this.loginService.getView();
/*     this.experienciasServise.getAllExperiencias().subscribe(data => {
      this.arrExperiencias = data;
      //console.log(this.arrExperiencias);
    }) */
/*     this.experienciasServise.getExperienciasByPersona(281).subscribe(data => {
      this.arrExperiencias = data;
      console.log(data);
    }) */
    this.getExperiencias()
    //console.log();
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
    this.getExperiencias()
/*     this.experienciasServise.getAllExperiencias().subscribe(data => {
      this.arrExperiencias = data;
      //console.log(this.arrExperiencias);
    }) */
  }

  getExperiencias() {
    if(this.persona.id != null){
      this.experienciasServise.getExperienciasByPersona(this.persona.id!).subscribe(data => {
        this.arrExperiencias = data;
        //console.log(data);
      })
    }
  }

}
