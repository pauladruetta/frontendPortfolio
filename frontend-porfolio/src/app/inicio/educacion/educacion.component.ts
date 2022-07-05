import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/models/educacion.model';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.sass']
})
export class EducacionComponent implements OnInit {

  arrEducacion: Educacion[];

  constructor(
    private educacionService: EducacionService
  ) { }

  async ngOnInit() {
    this.educacionService.getAllEducacion().subscribe(data => {
      this.arrEducacion = data;
      console.log(this.arrEducacion);
    })

    console.log();
  }

}
