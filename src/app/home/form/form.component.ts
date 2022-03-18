import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { interval, Subscription } from 'rxjs';
import { take, finalize } from 'rxjs/operators';
import { ProgressBarService } from 'src/app/core/services/progress-bar.service';
import { SucccesSnackBarComponent } from 'src/app/shared/components/succces-snack-bar/succces-snack-bar.component';
import { minimunOneCheckboxValidator } from 'src/app/shared/validators/minimunOneCheckboxValidator';
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

  public get stickers() {
    return this.stickersForm.get('stickers')!;
  }

  public get react() {
    return this.stickersForm.get('stickers.react')!;
  }

  public get vue() {
    return this.stickersForm.get('stickers.vue')!;
  }

  public get angular() {
    return this.stickersForm.get('stickers.angular')!;
  }

  public get quantity() {
    return this.stickersForm.get('quantity')!;
  }

  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private progressBarService: ProgressBarService
  ) {
    this.stickersForm = new FormGroup({
      stickers: new FormGroup(
        {
          react: new FormControl(false),
          vue: new FormControl(false),
          angular: new FormControl(false),
        },
        minimunOneCheckboxValidator()
      ),
      quantity: new FormControl(1, [
        Validators.required,
        Validators.min(1),
        Validators.pattern(/^[0-9]*$/),
      ]),
      comment: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.stickersFormSub = this.stickersForm.valueChanges.subscribe((value) => {
      console.log(this.stickersForm);

      const {
        stickers: { react, angular, vue },
        ...props
      } = value;

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
        const interval$ = interval(80);

        const takeInterval = interval$.pipe(
          take(10),
          finalize(() => {
            this.openSnackBar();
            this._resetForm();
            dialogSubmitSub.unsubscribe();
          })
        );

        takeInterval.subscribe((value) => {
          const currentProgress = (value + 1) * 10;

          this.progressBarService.setProgress(currentProgress);
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
    return this.quantity.value < 1 || typeof this.quantity.value !== 'number'
      ? this.stickersForm.patchValue({
          quantity: 1,
        })
      : this.stickersForm.patchValue({
          quantity: Number(this.quantity.value) + 1,
        });
  }

  decrement() {
    if (this.quantity.value > 1) {
      this.stickersForm.patchValue({
        quantity: Number(this.quantity.value) - 1,
      });
    }
  }
}
