import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

declare var window: any;

@Component({
  selector: 'app-confirm-model',
  templateUrl: './confirm-model.component.html',
  styleUrls: ['./confirm-model.component.sass']
})
export class ConfirmModelComponent implements OnInit {

  @Input() texto: string;
  @Input() idModal: string;
  @Output() accion: EventEmitter<Boolean> = new EventEmitter();

  formModal: any;

  constructor() { }

  ngOnInit(): void {
    // this.formModal = new window.bootstrap.Modal(
    //   document.getElementById('confirmModel')
    // );
  }

  openFormModal() {
    //this.formModal.show();
  }
  OnCancel() {
    // confirm or save something
    console.log("click cancel")
    this.accion.emit(false);
    // this.formModal.hide();
  }

  OnAcept() {
    // confirm or save something
    console.log("click ok")
    this.accion.emit(true);
    // this.formModal.hide();
  }
}
