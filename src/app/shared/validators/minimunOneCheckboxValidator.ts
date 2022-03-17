import { ValidatorFn } from '@angular/forms';

export const minimunOneCheckboxValidator = (minRequired = 1): ValidatorFn => {
  return function validate(formGroup: any) {
    let checked = 0;

    Object.keys(formGroup.controls).forEach((key) => {
      const control = formGroup.controls[key];

      if (control.value === true) {
        checked++;
      }
    });

    if (checked < minRequired) {
      return {
        requireCheckboxesToBeChecked: true,
      };
    }

    return null;
  };
};
