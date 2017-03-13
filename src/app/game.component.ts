import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Game } from './game';

@Component({
    moduleId: module.id,
    selector: 'game-detail',
    templateUrl: './game.component.html'
})
export class GameComponent implements OnInit {

constructor(
    private gameService: GameService,
    private route: ActivatedRoute,
    private location: Location
) { }

    ngOnInit(): void {
        
    }


}