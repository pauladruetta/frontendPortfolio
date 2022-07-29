import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cancelar-button',
  templateUrl: './cancelar-button.component.html',
  styleUrls: ['./cancelar-button.component.sass']
})
export class CancelarButtonComponent implements OnInit {

  @Input() myStyles: object = {}
  @Output() onClickButton: EventEmitter<String> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    console.log('Click on cancel button');
    this.onClickButton.emit('cancel');
    //FIXME: Copiado de edicion
  }
}
