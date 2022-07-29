import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-agregar-button',
  templateUrl: './agregar-button.component.html',
  styleUrls: ['./agregar-button.component.sass']
})
export class AgregarButtonComponent implements OnInit {

  @Input() myStyles: object = {}
  @Output() onClickButton: EventEmitter<Boolean> = new EventEmitter()
  editable: Boolean

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    console.log('Click on add button');
    this.editable = !this.editable;
    this.onClickButton.emit(this.editable);
    //FIXME: Copiado de edicion
  }

}
