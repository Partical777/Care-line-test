import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './heroes.component/heroes.component';

@NgModule({
  imports: [
    CommonModule,
    HeroesRoutingModule
  ],
  declarations: [HeroesComponent]
})
export class HeroesModule { }
