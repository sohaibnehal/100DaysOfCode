import { Injectable } from '@angular/core';
import { Hero } from "../interface/hero";
import { HEROES } from "../data/heroes";
import { MessageService } from './message.service';


import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";


@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    this.messageService.addMessage('Hero Service: Heroes have been fetched');
    return of (HEROES);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.addMessage(`Hero Service: Sending hero with id: ${id}`);
    return of (HEROES.find(hero => hero.id === id));

  }


}
