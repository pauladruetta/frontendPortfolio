import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-edition-button',
  templateUrl: './edition-button.component.html',
  styleUrls: ['./edition-button.component.sass']
})
export class EditionButtonComponent implements OnInit {

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
  }

}
