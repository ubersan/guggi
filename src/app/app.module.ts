import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms';
import { HttpModule }       from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }         from './app.component';
import { GuggiNavComponent }    from './guggi-nav.component';
import { NewGameComponent }     from './new-game.component';
import { GuggiHomeComponent }   from './guggi-home.component';
import { UserService }          from './user.service';
import { GamesListComponent}    from './games-list.component';
import { GameService }          from './game.service';
import { GameComponent }        from './game.component';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
    ],
  declarations: [
    AppComponent,
    GuggiNavComponent,
    NewGameComponent,
    GuggiHomeComponent,
    GamesListComponent,
    GameComponent
    ],
  providers:    [
    UserService,
    GameService
  ],
  bootstrap:    [
    AppComponent
    ]
})
export class AppModule { }
