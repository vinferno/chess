import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import {StoreModule} from '@ngrx/store';
import {reducers} from './state/reducers-index';
import { SquareComponent } from './square/square.component';
import { PieceComponent } from './piece/piece.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    SquareComponent,
    PieceComponent
  ],
  imports: [
    StoreModule.forRoot(reducers),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
