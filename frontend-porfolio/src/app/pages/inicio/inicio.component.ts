import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Persona } from 'src/app/models/persona.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.sass']
})

export class InicioComponent implements OnInit {
  @Output() persona: Persona
  //@Output() onEditHabilidad: EventEmitter<Boolean> = new EventEmitter();
  //arrHabilidad: Habilidad[];
  constructor( private dataService: DataService) { }

  ngOnInit(): void {
     this.dataService.persona.subscribe(data => {
       this.persona = data;
    //   console.log(this.arrHabilidad);
    })
    // // this.habilidadesService.refreshHabilidades()
    // // this.arrHabilidad = this.habilidadesService.getAllHabilidades();
    // console.log(this.arrHabilidad);
  }


  // onEditProyect() {
  //   this.onEditHabilidad.emit(true)
  // }
}
