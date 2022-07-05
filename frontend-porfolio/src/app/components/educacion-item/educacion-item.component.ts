import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { Educacion } from 'src/app/models/educacion.model';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-educacion-item',
  templateUrl: './educacion-item.component.html',
  styleUrls: ['./educacion-item.component.sass']
})
export class EducacionItemComponent implements OnInit {

  @Input() educacion:  Educacion;
  visibleButton: Boolean;
  fecha_fin: String

  constructor(
    private educacionService: EducacionService,
    private loginService: LoginService

  ) {
   this.loginService.toggleView.subscribe(data =>  {
    console.log('toggleView')
    this.visibleButton = data
   })

    console.log(this.visibleButton )
  }

  async ngOnInit() {
    this.visibleButton = this.loginService.getView();
  }

}
