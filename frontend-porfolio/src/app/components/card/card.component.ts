import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {

  @Input() title:string = ""
  @Input() cardClass:string = ""


  constructor() { }

  ngOnInit(): void {
  }

}
