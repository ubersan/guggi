import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { Game } from './game';

@Injectable()
export class GameService {
    private gameUrl = 'api/games';
    private headers = new Headers({'Content-Type': 'applipcation/json'});

    constructor(private http: Http) { }

    getGame(id: number): Promise<Game> {
        return this.getGames()
             .then(games => games.find(game => game.id === id));
    }

    getGames(): Promise<Game[]> {
        return this.http.get(this.gameUrl)
            .toPromise()
            .then(res => res.json().data as Game[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    }    
}