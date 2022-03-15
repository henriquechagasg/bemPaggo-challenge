import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FormComponent } from './form/form.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    // Routing
    HomeRoutingModule,

    // Shared
    SharedModule,
  ],
  declarations: [HomeComponent, FormComponent],
})
export class HomeModule {}
