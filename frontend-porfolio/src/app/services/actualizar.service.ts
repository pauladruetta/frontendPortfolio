import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActualizarService {

  @Output() public getInfo: EventEmitter<boolean>

  constructor() {
    this.getInfo = new EventEmitter();
   }


  getInfoBD() {
    console.log('Get Info')
    this.getInfo.emit(true)
  }

}
