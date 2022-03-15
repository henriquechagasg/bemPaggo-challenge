import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    // Angular
    CommonModule,

    // Routing
    HomeRoutingModule,

    // Shared
  ],
  declarations: [HomeComponent],
})
export class HomeModule {}
