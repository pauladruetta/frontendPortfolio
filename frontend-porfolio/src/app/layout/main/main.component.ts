import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass'],
  host:{
    'class': ' flex-grow-1'
  }
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
