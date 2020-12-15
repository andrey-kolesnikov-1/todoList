import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

  @Output() onClose: EventEmitter<any> = new EventEmitter<any>();
  close: boolean = false;

  constructor() {
  }

  closeDialog() {
    this.close = true;
    setTimeout(() => this.onClose.emit(), 700)
  }

}
