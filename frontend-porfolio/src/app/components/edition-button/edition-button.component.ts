import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EditionService } from 'src/app/services/edition.service';

@Component({
  selector: 'app-edition-button',
  templateUrl: './edition-button.component.html',
  styleUrls: ['./edition-button.component.sass']
})
export class EditionButtonComponent implements OnInit {

  @Input() myStyles: object = {}
  @Input() newComponent:boolean = false
  isActived:boolean = true
  @Output() onClickButton: EventEmitter<Boolean> = new EventEmitter()

  editable: Boolean

  constructor(private editionService: EditionService ) { }

  ngOnInit(): void {
    this.editionService.desactivete.subscribe(
      data => {
        this.isActived = data ;
        })
  }

  onClick() {
    console.log('Click on edit button');
    this.editable = !this.editable;
    this.onClickButton.emit(this.editable);
    this.editionService.sendDesactivete(false)
  }

}
