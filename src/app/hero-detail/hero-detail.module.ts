import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroDetailRoutingModule } from './hero-detail-routing.module';
import { HeroDetailComponent } from './hero-detail-component/hero-detail.component';

@NgModule({
  imports: [
    CommonModule,
    HeroDetailRoutingModule
  ],
  declarations: [HeroDetailComponent]
})
export class HeroDetailModule { }
