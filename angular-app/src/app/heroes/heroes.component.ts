import { Component, OnInit } from '@angular/core';
import { Hero } from '../interface/hero';
import {HeroService} from "../service/hero.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero;
  heroes: Hero[];

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.gerHeroes();
  }

  gerHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => {
      this.heroes = heroes;
    })
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
