import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/models/experiencia.model';
import { ExperienciasService } from 'src/app/services/experiencias.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.sass']
})
export class ExperienciaComponent implements OnInit {

  arrExperiencias: Experiencia[];

  constructor(
    private experienciasServise: ExperienciasService
  ) {

  }

  async ngOnInit() {

    this.experienciasServise.getAllExperiencias().subscribe(data => {
      this.arrExperiencias = data;
      console.log(this.arrExperiencias);
    })

    console.log();
  }

}
