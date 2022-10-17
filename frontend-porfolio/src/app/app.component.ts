import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  host:{
    'class': 'd-flex flex-column h-100'
  }
})
export class AppComponent {
  title = 'frontend-porfolio';
  bodyClass: string;

  constructor() {
    this.bodyClass = 'fullheight';
    this.changeBodyClass();
  }
    changeBodyClass() {
      // get html body element
      const bodyElement = document.body
      // add class
      bodyElement.classList.add(this.bodyClass);
    }

}
