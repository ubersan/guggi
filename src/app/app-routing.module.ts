import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GuggiStartComponent}   from './guggi-start.component';
import { GuggiNavComponent }    from './guggi-nav.component';
import { GuggiGameComponent }   from './guggi-game.component';

const routes: Routes = [
    { path: '', redirectTo: '/start', pathMatch: 'full'},
    { path: 'start', component: GuggiStartComponent },
    { path: 'game', component: GuggiGameComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }