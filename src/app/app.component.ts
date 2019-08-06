import { Component } from '@angular/core';
import { Http } from '@angular/http'

import { Hero } from './hero';
import { MessageService } from './message.service';
import { HeroService } from './hero.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes: Hero[];
  localJson = {
    "dashboard" : "",
    "heroes" : ""
  };

  constructor(public messageService: MessageService, private heroService: HeroService, http: Http) {
    http.get("../../../assets/data/dashboard-link.json").subscribe(response => {
      this.localJson = response.json();
    });
  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  getFunction(){
    return window.location.href !== "https://care-line-test.stackblitz.io/ci-heroes";
  }
}
