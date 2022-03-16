import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { interval, Subscription, timer } from 'rxjs';
import { ProgressBarService } from 'src/app/core/services/progress-bar.service';
import { SucccesSnackBarComponent } from 'src/app/shared/succces-snack-bar/succces-snack-bar.component';
import { ConfirmOrderDialogComponent } from '../confirm-order-dialog/confirm-order-dialog.component';

export interface OrderView {
  stickers: string[];
  quantity: number;
  comment: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(300, style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class FormComponent implements OnInit, OnDestroy {
  stickersForm: FormGroup;

  order: OrderView;

  stickersFormSub: Subscription;

  public get react() {
    return this.stickersForm.get('react')!;
  }

  public get vue() {
    return this.stickersForm.get('vue')!;
  }

  public get angular() {
    return this.stickersForm.get('angular')!;
  }

  public get quantity() {
    return this.stickersForm.get('quantity')!;
  }

  public get canSubmit() {
    return (
      (this.react.value || this.vue.value || this.angular.value) &&
      this.quantity?.value >= 1
    );
  }

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private progressBarService: ProgressBarService
  ) {}

  ngOnInit(): void {
    this.stickersForm = this.fb.group({
      react: [false, [Validators.required]],
      vue: [false, [Validators.required]],
      angular: [false, [Validators.required]],
      quantity: [1, [Validators.required, Validators.min(1)]],
      comment: [''],
    });

    this.stickersFormSub = this.stickersForm.valueChanges.subscribe((value) => {
      const { react, angular, vue, ...props } = value;

      this.order = {
        ...props,
        stickers: [react && 'React', angular && 'Angular', vue && 'Vue'].filter(
          (item) => item
        ),
      };
    });
  }

  ngOnDestroy(): void {
    this.stickersFormSub.unsubscribe();
  }

  onSubmit() {
    const dialogRef = this.dialog.open(ConfirmOrderDialogComponent, {
      data: { order: this.order },
    });

    const dialogSubmitSub =
      dialogRef.componentInstance.orderConfirmed.subscribe(() => {
        const source$ = interval(40);
        const sourceSub = source$.subscribe((val) => {
          const maxInterval = 10;

          const intervalIsReached = val >= maxInterval;

          const progress = Math.floor((val / maxInterval) * 100);

          this.progressBarService.setProgress(progress);

          if (intervalIsReached) {
            this.openSnackBar();
            this._resetForm();
            sourceSub.unsubscribe();
            dialogSubmitSub.unsubscribe();
          }
        });
      });
  }

  openSnackBar() {
    const durationInSeconds = 3;

    this.snackBar.openFromComponent(SucccesSnackBarComponent, {
      duration: durationInSeconds * 1000,
    });
  }

  private _resetForm() {
    this.stickersForm.reset();
    this.stickersForm.patchValue({ quantity: 1 });
  }

  increment() {
    this.stickersForm.patchValue({ quantity: this.quantity.value + 1 });
  }

  decrement() {
    if (this.quantity.value > 1) {
      this.stickersForm.patchValue({ quantity: this.quantity.value - 1 });
    }
  }
}
