import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { SucccesSnackBarComponent } from './succces-snack-bar/succces-snack-bar.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

@NgModule({
  imports: [
    // Angular
    CommonModule,
    ReactiveFormsModule,

    // Material
    MaterialModule,
  ],
  declarations: [SucccesSnackBarComponent, ProgressBarComponent],
  exports: [
    // Angular
    CommonModule,
    ReactiveFormsModule,

    // Material
    MaterialModule,

    //Components
    ProgressBarComponent,
  ],
})
export class SharedModule {}
