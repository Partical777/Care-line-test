import { Component } from '@angular/core';

import { Hero } from './hero';
import { MessageService } from './message.service';
import { HeroService } from './hero.service';

import LocalJSON from "../assets/data/dashboard-link.json";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes: Hero[];
  localJson = LocalJSON;

  constructor(public messageService: MessageService, private heroService: HeroService) {}

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
}
