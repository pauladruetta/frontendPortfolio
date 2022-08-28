import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Habilidad } from 'src/app/models/habilidad.model';
import { HabilidadesService } from 'src/app/services/habilidades.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.sass']
})


export class InicioComponent implements OnInit {

  //@Output() onEditHabilidad: EventEmitter<Boolean> = new EventEmitter();
  //arrHabilidad: Habilidad[];
  constructor( private habilidadesService: HabilidadesService) { }

  ngOnInit(): void {
    // this.habilidadesService.getAllHabilidades().subscribe(data => {
    //   this.arrHabilidad = data;
    //   console.log(this.arrHabilidad);
    // })
    // // this.habilidadesService.refreshHabilidades()
    // // this.arrHabilidad = this.habilidadesService.getAllHabilidades();
    // console.log(this.arrHabilidad);
  }


  // onEditProyect() {
  //   this.onEditHabilidad.emit(true)
  // }
}
