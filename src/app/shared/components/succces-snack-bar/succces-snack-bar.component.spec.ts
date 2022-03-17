import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucccesSnackBarComponent } from './succces-snack-bar.component';

describe('SucccesSnackBarComponent', () => {
  let component: SucccesSnackBarComponent;
  let fixture: ComponentFixture<SucccesSnackBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SucccesSnackBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SucccesSnackBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
