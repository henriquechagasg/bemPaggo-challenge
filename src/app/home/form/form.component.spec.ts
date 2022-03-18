import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProgressBarService } from 'src/app/core/services/progress-bar.service';
import { FormComponent } from './form.component';

interface StickersFormTest {
  stickers: {
    react: boolean;
    vue: boolean;
    angular: boolean;
  };
  quantity: number | string | null;
  comment: string;
}

type FormConditionOptions =
  | 'noCheckBoxSelection'
  | 'emptyQuantity'
  | 'negativeQuantity'
  | 'notNumberQuantity';

export class MatDialogMock {}

export class MatSnackBarMock {}

const initialFormValue: StickersFormTest = {
  stickers: {
    react: false,
    vue: false,
    angular: false,
  },
  quantity: 1,
  comment: '',
};

const validFormValue: StickersFormTest = {
  stickers: {
    react: true,
    vue: true,
    angular: true,
  },
  quantity: 1,
  comment: '',
};

const formConditions: Record<FormConditionOptions, StickersFormTest> = {
  noCheckBoxSelection: {
    ...validFormValue,
    stickers: {
      react: false,
      vue: false,
      angular: false,
    },
  },
  emptyQuantity: {
    ...validFormValue,
    quantity: null,
  },

  negativeQuantity: {
    ...validFormValue,
    quantity: -1,
  },
  notNumberQuantity: {
    ...validFormValue,
    quantity: 'NaN',
  },
};

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormComponent],
      providers: [
        ProgressBarService,
        { provide: MatDialog, useClass: MatDialogMock },
        { provide: MatSnackBar, useClass: MatSnackBarMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('stickers form should initialize with initial form value', () => {
    expect(component.stickersForm.value).toEqual(initialFormValue);
  });

  it('stickers form should initialize as invalid', () => {
    expect(component.stickersForm.valid).toBeFalse();
  });

  it('stickers form should be invalid when any checkboxes are selected', () => {
    component.stickersForm.patchValue(formConditions.noCheckBoxSelection);
    expect(component.stickersForm.valid).toBeFalse();
  });

  it('stickers form should be invalid when any checkboxes are selected', () => {
    component.stickersForm.patchValue(formConditions.noCheckBoxSelection);
    expect(component.stickersForm.valid).toBeFalse();
  });

  it('stickers form should be invalid when quanity value is empty', () => {
    component.stickersForm.patchValue(formConditions.emptyQuantity);
    expect(component.stickersForm.valid).toBeFalse();
  });

  it('stickers form should be invalid when quanity value is negative', () => {
    component.stickersForm.patchValue(formConditions.negativeQuantity);
    expect(component.stickersForm.valid).toBeFalse();
  });

  it('stickers form should be invalid when quanity value is not a number', () => {
    component.stickersForm.patchValue(formConditions.notNumberQuantity);
    expect(component.stickersForm.valid).toBeFalse();
  });

  it('increment method should increment quantity value', () => {
    expect(component.quantity.value).toBe(1);
    component.increment();
    expect(component.quantity.value).toBe(2);
  });

  it('decrement method should decrement quantity value', () => {
    expect(component.quantity.value).toBe(1);
    component.increment();
    component.decrement();
    expect(component.quantity.value).toBe(1);
  });

  it('quantity value should not decrement if it"s value is equal to 1', () => {
    expect(component.quantity.value).toBe(1);
    component.decrement();
    expect(component.quantity.value).toBe(1);
  });

  it('quantity value should be 1 on first increment when it"s value is negative', () => {
    component.stickersForm.patchValue({ quantity: -10 });
    component.increment();
    expect(component.quantity.value).toBe(1);
  });

  it('quantity value should be 1 on first increment when it"s value is not of type "number"', () => {
    component.stickersForm.patchValue({ quantity: 'NaN' });
    component.increment();
    expect(component.quantity.value).toBe(1);
  });
});
