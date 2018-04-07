import { Injectable } from '@angular/core';
import { Hero } from "../interface/hero";
import { HEROES } from "../data/heroes";

import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";


@Injectable()
export class HeroService {

  constructor() {}

  getHeroes(): Observable<Hero[]> {
    return of (HEROES);
  }

}
