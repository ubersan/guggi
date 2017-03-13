import { Component, OnInit }    from '@angular/core';
import { Router }               from '@angular/router';

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
            .then(games => this.games = games);
    }

    onSelect(id: number): void {
        this.router.navigate(['/detail', id]);
    }

    constructor(
        private router: Router,
        private gameService: GameService
    ) { }

    games: Game[] = [];
}