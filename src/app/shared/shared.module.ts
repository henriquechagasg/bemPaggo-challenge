import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [
    // Angular
    CommonModule,

    // Material
    MaterialModule,
  ],
  declarations: [],
  exports: [
    // Angular
    CommonModule,

    // Material
    MaterialModule,
  ],
})
export class SharedModule {}
