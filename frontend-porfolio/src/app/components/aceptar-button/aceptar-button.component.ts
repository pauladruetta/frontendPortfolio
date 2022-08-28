import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EditionService } from 'src/app/services/edition.service';

@Component({
  selector: 'app-aceptar-button',
  templateUrl: './aceptar-button.component.html',
  styleUrls: ['./aceptar-button.component.sass']
})
export class AceptarButtonComponent implements OnInit {

  @Input() myStyles: object = {}
  @Output() onClickButton: EventEmitter<Boolean> = new EventEmitter()

  constructor(private editionService: EditionService) { }

  ngOnInit(): void {

  }

  onClick(){
    console.log('Click on Acept button');
    this.onClickButton.emit();
    this.onDisactivete()
  }

  onDisactivete() {
    this.editionService.sendDesactivete(true)
  }
}
