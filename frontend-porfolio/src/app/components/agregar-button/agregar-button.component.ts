import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EditionService } from 'src/app/services/edition.service';

@Component({
  selector: 'app-agregar-button',
  templateUrl: './agregar-button.component.html',
  styleUrls: ['./agregar-button.component.sass']
})
export class AgregarButtonComponent implements OnInit {

  @Input() myStyles: object = {}
  @Input() aviso: string = "agregar"
  isActived:boolean = true
  @Output() onClickButton: EventEmitter<Boolean> = new EventEmitter()
  @Output() onHoverButton: EventEmitter<Boolean> = new EventEmitter()
  agregando: Boolean
  avisoVisible: Boolean = false

  constructor(private editionService: EditionService ) { }

  ngOnInit(): void {
    this.editionService.desactivete.subscribe(
      data => {
        this.isActived = data ;
        })
  }

  onClick(){
    console.log('Click on add button');
    this.agregando = !this.agregando;
    this.onClickButton.emit(this.agregando);
    this.editionService.sendDesactivete(false)
  }

  onHover() {
    console.log('Hover button');
    this.onHoverButton.emit(true);
    this.avisoVisible = true
  }

  outHover(){
    console.log('Out Hover button');
    this.onHoverButton.emit(false);
    this.avisoVisible = false
  }
}
