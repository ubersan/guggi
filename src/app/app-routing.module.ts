import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewGameComponent }     from './new-game.component';
import { GuggiNavComponent }    from './guggi-nav.component';
import { GuggiHomeComponent }   from './guggi-home.component';
import { GamesListComponent }   from './games-list.component';
import { GameComponent }        from './game.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'new-game',     component: NewGameComponent },
    { path: 'home',         component: GuggiHomeComponent },
    { path: 'games',        component: GamesListComponent },
    { path: 'detail/:id',   component: GameComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }