import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { OrderView } from '../form/form.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface DialogData {
  order: OrderView;
}

@Component({
  selector: 'app-confirm-order-dialog',
  templateUrl: './confirm-order-dialog.component.html',
  styleUrls: ['./confirm-order-dialog.component.scss'],
})
export class ConfirmOrderDialogComponent implements OnInit {
  @Output() orderConfirmed = new EventEmitter<OrderView>();

  get order() {
    return this.data.order;
  }

  constructor(
    public dialogRef: MatDialogRef<ConfirmOrderDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: DialogData
  ) {}

  ngOnInit(): void {}

  confirm() {
    this.orderConfirmed.emit(this.order);
  }
}
