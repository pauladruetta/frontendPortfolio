import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-eliminate-button',
  templateUrl: './eliminate-button.component.html',
  styleUrls: ['./eliminate-button.component.sass']
})
export class EliminateButtonComponent implements OnInit {

  @Input() myStyles: object = {}
  @Output() onClickButton: EventEmitter<Boolean> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    console.log('Click on delete button');
    this.onClickButton.emit(true);
  }
}
