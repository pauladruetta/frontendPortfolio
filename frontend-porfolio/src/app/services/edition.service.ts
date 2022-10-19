import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditionService {

  @Output() public desactivete: EventEmitter<boolean>
  constructor() {
    this.desactivete = new EventEmitter();
  }

  sendDesactivete(state: boolean) {
    console.log('Get Info')
    console.log(state)
    this.desactivete.emit(state)
  }
}
