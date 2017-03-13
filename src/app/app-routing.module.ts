import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewGameComponent }     from './new-game.component';
import { GuggiNavComponent }    from './guggi-nav.component';
import { GuggiGameComponent }   from './guggi-game.component';
import { GuggiHomeComponent }   from './guggi-home.component';
import { GamesListComponent }   from './games-list.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'new-game', component: NewGameComponent },
    { path: 'game', component: GuggiGameComponent },
    { path: 'home', component: GuggiHomeComponent },
    { path: 'games', component: GamesListComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }