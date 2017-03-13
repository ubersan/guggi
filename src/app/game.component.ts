import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { Game }         from './game';
import { GameService }  from './game.service';

import { ChangeDetectorRef } from '@angular/core';

import 'rxjs/add/operator/switchMap';

@Component({
    moduleId: module.id,
    selector: 'game-detail',
    templateUrl: './game.component.html'
})
export class GameComponent implements OnInit {

    ngOnInit(): void {
        this.getGame();
    }

    getGame(): void {
        this.route.params
            .switchMap((params: Params) => this.gameService.getGame(+params['id']))
            .subscribe(game => this.game = game);
    }

    goBack(): void {
        this.location.back();
    }

    game: Game;

    constructor(
        private gameService: GameService,
        private route: ActivatedRoute,
        private location: Location,
    ) { }

}