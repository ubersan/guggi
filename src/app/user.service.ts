import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { User } from './user';

@Injectable()
export class UserService {
    private userUrl = 'api/users';
    private headers = new Headers({'Content-Type': 'applipcation/json'});

    constructor(private http: Http) { }

    getUsers(): Promise<User[]> {
        return this.http.get(this.userUrl)
            .toPromise()
            .then(ans => ans.json().data as User[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    }    
}