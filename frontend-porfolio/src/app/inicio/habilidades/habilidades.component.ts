import { Component, OnInit } from '@angular/core';
import { Habilidad } from 'src/app/models/habilidad.model';
import { HabilidadesService } from 'src/app/services/habilidades.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.sass']
})
export class HabilidadesComponent implements OnInit {

  arrHabilidad: Habilidad[];

  constructor(
    private habilidadesService: HabilidadesService
  ) { }

  async ngOnInit() {

    this.habilidadesService.getAllProyetos().subscribe(data => {
      this.arrHabilidad = data;
      console.log(this.arrHabilidad);
    })

    console.log();
  }
}
