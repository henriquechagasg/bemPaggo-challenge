import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

const MaterialComponents = [MatCardModule, MatButtonModule];

@NgModule({ exports: [MaterialComponents] })
export class MaterialModule {}
