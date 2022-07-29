import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-aceptar-button',
  templateUrl: './aceptar-button.component.html',
  styleUrls: ['./aceptar-button.component.sass']
})
export class AceptarButtonComponent implements OnInit {

  @Input() myStyles: object = {}
  @Output() onClickButton: EventEmitter<Boolean> = new EventEmitter()
  editable: Boolean

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    console.log('Click on edit button');
    this.editable = !this.editable;
    this.onClickButton.emit(this.editable);
    //FIXME: Copiado de editcion
  }
}
