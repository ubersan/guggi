import { Component, OnInit } from '@angular/core';

import { Game }         from './game';
import { GameService }  from './game.service';

@Component({
    moduleId: module.id,
    selector: 'games-list',
    templateUrl: './games-list.component.html'
})
export class GamesListComponent implements OnInit {
    ngOnInit(): void {
        this.getGames();
    }

    getGames(): void {
        this.gameService.getGames()
            .then(games => 
            {
                this.games = games;
                this.sname = this.games[0].name
            });
    }

    constructor(
        private gameService: GameService
    ) { }

    games: Game[] = [];
    sname: string = '';
}