import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass']
})
export class ButtonComponent implements OnInit {

  myStyleslocal: object = {
    'background-color': 'lime',
    'font-size': '20px',
    'font-weight': 'bold'}

@Input() text:string = "Click"
@Input() myStyles: object = {}
@Output() onClickButton: EventEmitter<Text> = new EventEmitter()

constructor() { }

ngOnInit(): void {
}

onClick(){
  console.log('Click on button');
  this.onClickButton.emit();
}
}
