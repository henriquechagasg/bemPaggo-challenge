import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

const MaterialComponents = [
  MatCardModule,
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatFormFieldModule,
  MatIconModule,
];

@NgModule({ exports: [MaterialComponents] })
export class MaterialModule {}
