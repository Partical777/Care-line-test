import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'

import { Hero } from '../../hero';
import { HeroService } from '../../hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  localJson = {
    "dashboard" : "",
    "heroes" : ""
  };

  constructor(private heroService: HeroService, http: Http) { 
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

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }

    let maxId = 0;
    this.heroes.forEach(function(el){
      if(el.id > maxId){
        maxId = el.id;
      }
    });

    this.heroService.addHero({ name, id: maxId+1 } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
      this.heroes = this.heroes.filter(h => h !== hero);
      this.heroService.deleteHero(hero).subscribe();
  }

}
