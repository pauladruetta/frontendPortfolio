import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EditionService } from 'src/app/services/edition.service';

@Component({
  selector: 'app-cancelar-button',
  templateUrl: './cancelar-button.component.html',
  styleUrls: ['./cancelar-button.component.sass']
})
export class CancelarButtonComponent implements OnInit {

  @Input() myStyles: object = {}
  @Input() buttonClass: string
  @Input() cruz: boolean = true
  @Input() texto: string = ""
  @Output() onClickButton: EventEmitter<String> = new EventEmitter()


  constructor(private editionService: EditionService) { }

  ngOnInit(): void {
  }

  onClick(){
    console.log('Click on cancel button');
    this.onClickButton.emit('cancel');
    this.onDisactivete()
  }

  onDisactivete() {
    this.editionService.sendDesactivete(true)
  }
}
