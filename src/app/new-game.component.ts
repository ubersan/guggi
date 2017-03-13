import { Component, OnInit } from '@angular/core';

import { User }         from './user';
import { UserService }  from './user.service';

@Component({
    moduleId: module.id,
    selector: 'new-game',
    templateUrl: './new-game.component.html'
})
export class NewGameComponent implements OnInit {
    ngOnInit(): void {
        this.getUsers();
    }

    title = 'Starting page';

    players: User[] = [];

    curr_desc:string = '';
    curr_text:string = '';

    selectors = ['Der/Das', 'Jede', 'Alle'];
    curr_selector = '';

    colors = ['Rose', 'Eichel', 'Schilte', 'Schelle'];
    curr_color = '';

    cards = ['6', '7', '8', '9', 'Banner', 'Under', 'Ober', 'König', 'Ass'];
    curr_card = '';

    curr_cost = '';

    temp_descs: string[] = [];

    constructor(
        private userService: UserService
    ) { }

    getUsers(): void {
        this.userService.getUsers().then(users => this.players = users);
    }

    done(): void {
        this.temp_descs.push(this.curr_selector + ' ' + this.curr_color + ' ' + this.curr_card + ' kostet ' + this.curr_cost + ' CHF');
        this.curr_selector = '';
        this.curr_color = '';
        this.curr_card = '';
        this.curr_cost = '';
    }
}