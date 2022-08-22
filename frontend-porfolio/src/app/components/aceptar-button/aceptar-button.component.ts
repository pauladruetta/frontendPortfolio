import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-aceptar-button',
  templateUrl: './aceptar-button.component.html',
  styleUrls: ['./aceptar-button.component.sass']
})
export class AceptarButtonComponent implements OnInit {

  @Input() myStyles: object = {}
  @Output() onClickButton: EventEmitter<Boolean> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {

  }

  onClick(){
    console.log('Click on Acept button');
    this.onClickButton.emit();
  }
}
