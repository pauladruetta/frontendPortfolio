import { EventEmitter, Injectable, Output } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActualizarService {

  @Output() public getInfo: EventEmitter<boolean>
  info: ReplaySubject<Boolean> = new ReplaySubject<Boolean>();

  constructor() {
    this.getInfo = new EventEmitter();
   }


  getInfoBD(state:boolean) {
    console.log('Get Info')
    this.info.next(state);
    this.getInfo.emit(true)

  }

}
