import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {stateActions} from '../state/reducers-index';

@Component({
  selector: 'vf-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  public board;

  constructor(public store: Store<any>) {
  }

  ngOnInit() {
    this.store.select('boardState').subscribe( boardState => {
      this.board = boardState;
    });
    setTimeout( () => this.resetBoard(), 500);
  }

  public resetBoard() {
    this.store.dispatch(stateActions.selectedActions.updateSelected(null));
    this.store.dispatch(stateActions.selectedActions.updateLastSquare(null));
    const newBoard = this.board.layout.map( (square, index) => {
      switch (index) {
        case 63:
          square.piece = 31;
          break;
        case 62:
          square.piece = 30;
          break;
        case 61:
          square.piece = 29;
          break;
        case 60:
          square.piece = 28;
          break;
        case 59:
          square.piece = 27;
          break;
        case 58:
          square.piece = 26;
          break;
        case 57:
          square.piece = 25;
          break;
        case 56:
          square.piece = 24;
          break;
        case 55:
          square.piece = 23;
          break;
        case 54:
          square.piece = 22;
          break;
        case 53:
          square.piece = 21;
          break;
        case 52:
          square.piece = 20;
          break;
        case 51:
          square.piece = 19;
          break;
        case 50:
          square.piece = 18;
          break;
        case 49:
          square.piece = 17;
          break;
        case 48:
          square.piece = 16;
          break;
        case 0:
          square.piece = 15;
          break;
        case 1:
          square.piece = 14;
          break;
        case 2:
          square.piece = 13;
          break;
        case 3:
          square.piece = 11;
          break;
        case 4:
          square.piece = 12;
          break;
        case 5:
          square.piece = 10;
          break;
        case 6:
          square.piece = 9;
          break;
        case 7:
          square.piece = 8;
          break;
        case 8:
          square.piece = 7;
          break;
        case 9:
          square.piece = 6;
          break;
        case 10:
          square.piece = 5;
          break;
        case 11:
          square.piece = 4;
          break;
        case 12:
          square.piece = 3;
          break;
        case 13:
          square.piece = 2;
          break;
        case 14:
          square.piece = 1;
          break;
        case 15:
          square.piece = 0;
          break;
        default:
          square.piece = null;
          break;
      }
      return square;
    });
    this.store.dispatch(stateActions.boardActions.updateLayout(newBoard));
  }

}
