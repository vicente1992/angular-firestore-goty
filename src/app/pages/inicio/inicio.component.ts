import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Game, GameVoto } from './../../interfaces/interfaces';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  public games: GameVoto[] = [];
  constructor(
    private db: AngularFirestore
  ) { }


  ngOnInit(): void {
    this.db.collection('goty').valueChanges()
      .pipe(
        map((games: Game[]) => {
          return games.map(({ name, votos }) => ({ name, value: votos }));
        })
      )
      .subscribe(games => {
        //console.log(games);
        this.games = games;
      });
  }

}
