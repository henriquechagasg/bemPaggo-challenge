import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(200, style({ opacity: 1 })),
      ]),
      transition('* => void', [animate(200, style({ opacity: 0 }))]),
    ]),
  ],
})
export class FormComponent implements OnInit {
  stickersForm: FormGroup = {} as FormGroup;
  constructor(private fb: FormBuilder) {}
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

  ngOnInit(): void {
    this.stickersForm = this.fb.group({
      react: [false, [Validators.required]],
      vue: [false, [Validators.required]],
      angular: [false, [Validators.required]],
      quantity: [1, [Validators.required, Validators.min(1)]],
      comments: [''],
    });

    this.stickersForm.valueChanges.subscribe(() => {
      console.log(this.quantity);
    });
  }

  onSubmit() {
    console.log(this.stickersForm.value);
  }

  increment() {
    this.stickersForm.patchValue({ quantity: this.quantity.value + 1 });
  }

  decrement() {
    if (this.quantity?.value > 1) {
      this.stickersForm.patchValue({ quantity: this.quantity.value - 1 });
    }
  }
}
