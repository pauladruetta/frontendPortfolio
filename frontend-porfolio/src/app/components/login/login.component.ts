import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  @Output() toggleEdit: EventEmitter<Boolean>
  constructor() {
    this.toggleEdit = new EventEmitter();
   }

  ngOnInit(): void {
  }

  onClick() {
    this.toggleEdit.emit(true)
  }

}
