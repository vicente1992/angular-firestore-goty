import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';

import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Game } from '../interfaces/interfaces';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GameService {
  private url: string = environment.url;
  private games: Game[] = [];
  constructor(private htppCliente: HttpClient) { }


  getNominados() {
    if (this.games.length > 0) {
      return of(this.games);

    } else {
      return this.htppCliente.get<Game[]>(`${this.url}/api/goty`)
        .pipe(
          tap(
            games => this.games = games
          )
        );
    }
  }

  votarJuego(id: string) {
    return this.htppCliente.post(`${this.url}/api/goty/${id}`, {})
      .pipe(
        catchError(err => {
          return of(err.error);
        })
      );
  }


}
