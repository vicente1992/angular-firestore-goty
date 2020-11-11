import { Component, OnInit } from '@angular/core';
import { GameService } from './../../services/game.service';
import { MessageService } from './../../services/message.service';
import { Game } from './../../interfaces/interfaces';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent implements OnInit {
  public games: Game[] = [];
  constructor(
    private gameService: GameService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.getNominados();
  }

  public getNominados() {
    this.gameService.getNominados()
      .subscribe(games => {
        this.games = games;
      });
  }

  public votarJuego(game: Game) {
    this.gameService.votarJuego(game.id)
      .subscribe((response: any) => {
        if (response.ok) {
          this.messageService.success('Gracias', response.message);
        } else {
          this.messageService.error('Error', response.message);
        }
      })
  }



}
