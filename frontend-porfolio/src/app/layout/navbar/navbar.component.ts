import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  // showEdit: boolean

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
  //  this.showEdit = this.loginService.getView();
  }

  onToggleEdit() {
    console.log('click')
    this.loginService.editView();
  }
}
