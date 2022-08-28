import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EditionService } from 'src/app/services/edition.service';

@Component({
  selector: 'app-eliminate-button',
  templateUrl: './eliminate-button.component.html',
  styleUrls: ['./eliminate-button.component.sass']
})
export class EliminateButtonComponent implements OnInit {

  @Input() myStyles: object = {}
  @Output() onClickButton: EventEmitter<Boolean> = new EventEmitter()
  isActived: boolean = true;
  @Input() element: string;
  idModel: string;
  constructor(private editionService: EditionService ) { }

  ngOnInit(): void {
    this.editionService.desactivete.subscribe(
      data => {
        this.isActived = data;
        })
    this.idModel="confirmElement"+this.element
  }
  onClick(elemento:any){
    console.log('Click on delete button');
    console.log(elemento)
    console.log(event)
    //this.mostrarModal()
    //this.editionService.sendDesactivete(false)
  }

  OnAccion(isAcepted: Boolean) {
    if (isAcepted) {
      console.log("acepted")
      console.log(isAcepted)
      console.log(this.element)
      this.onClickButton.emit(true);
      //this.mostrarModal()
    } else {
      console.log("no acepted")
    }
  }

  mostrarModal(){
    if (window.confirm("Está por eliminar de la base de datos este elemento")){
      this.onClickButton.emit(true);
//      this.editionService.sendDesactivete(false)
    } else {

    };
  }
}
