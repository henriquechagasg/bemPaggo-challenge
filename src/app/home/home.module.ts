import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { FormComponent } from './form/form.component';
import { ConfirmOrderDialogComponent } from './confirm-order-dialog/confirm-order-dialog.component';

@NgModule({
  imports: [
    // Routing
    HomeRoutingModule,

    // Shared
    SharedModule,
  ],
  declarations: [HomeComponent, FormComponent, ConfirmOrderDialogComponent],
})
export class HomeModule {}
