import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }     from './app.component';
import { GuggiGameComponent } from './guggi-game.component';
import { GuggiNavComponent } from './guggi-nav.component';
import { GuggiStartComponent } from './guggi-start.component';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    AppRoutingModule
    ],
  declarations: [
    AppComponent,
    GuggiGameComponent,
    GuggiNavComponent,
    GuggiStartComponent
    ],
  bootstrap:    [
    AppComponent
    ]
})
export class AppModule { }
