import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [
    // Angular
    CommonModule,
    ReactiveFormsModule,

    // Material
    MaterialModule,
  ],
  declarations: [],
  exports: [
    // Angular
    CommonModule,
    ReactiveFormsModule,

    // Material
    MaterialModule,
  ],
})
export class SharedModule {}
