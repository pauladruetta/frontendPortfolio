import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  showEdit: boolean
  @Output() public toggleView: EventEmitter<boolean>

  constructor() {
    this.showEdit = false
    this.toggleView = new EventEmitter();
  }

  getView(): boolean {
    return this.showEdit;
  }

  editView() {
    this.showEdit = !this.showEdit;
    console.log(this.showEdit)
    this.toggleView.emit(this.showEdit)
  }

}
