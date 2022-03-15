import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { FormComponent } from './form/form.component';

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
