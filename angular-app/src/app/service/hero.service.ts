import { Injectable } from '@angular/core';
import { Hero } from "../interface/hero";
import { MessageService } from './message.service';

import { HttpClient, HttpHeaders } from "@angular/common/http";


import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { catchError, map, tap } from 'rxjs/operators';


@Injectable()
export class HeroService {

  private heroesUrl = 'api/heroes';  // URL to web api

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) {}

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.addMessage('HeroService: ' + message);
  }

  getHeroes (): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        // Tap operator, looks at the Observable values, does something wit values, and pass them along.
        tap(heroes => this.log(`Heroes fetched`)),
        // catchError operator intercepts the Observable that failed.
        catchError(this.handleError('getHeroes', []))
      );
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url)
      .pipe(
        tap (hero => this.log(`Hero fetched`)),
        catchError(this.handleError('gerHero', []))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


}
