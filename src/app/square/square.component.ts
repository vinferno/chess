import {Component, Input, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {stateActions} from '../state/reducers-index';

@Component({
  selector: 'vf-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent implements OnInit {
  @Input()
  public number;
  public boardState;
  public selectedState;
  public piecesState;

  constructor(public store: Store<any>) { }

  ngOnInit() {
    this.store.select('boardState').subscribe( boardState => {
      this.boardState = boardState;
    });
    this.store.select('selectedState').subscribe( selectedState => {
      this.selectedState = selectedState;
    });
    this.store.select('piecesState').subscribe( piecesState => {
      this.piecesState = piecesState;
    });
  }

  public styleSquare(number) {
    if (!this.boardState.layout || !this.boardState.layout[number]) {
      return;
    }
    const square = this.selectedState.square === this.boardState.layout[number];
    const lastSquare = this.selectedState.lastSquare === this.boardState.layout[number];
    const style = {
      height: '100%',
      backgroundColor: square || lastSquare ?
        square ? 'lightcyan' : 'turquoise' : this.calculateColor(number, false),
      color : this.calculateColor(number, true),
    };
    return style;
  }

  public calculateColor(number, change) {
    const primary = this.boardState.layout[number].isPrimary;
    if (change) {
      return primary ? this.boardState.colors.secondary : this.boardState.colors.primary;
    }
    return primary ? this.boardState.colors.primary : this.boardState.colors.secondary;
  }

  public selectOrDrop(square) {
    if (this.selectedState.square && this.selectedState.square.piece !== null ) {



      if (this.piecesState.all[this.selectedState.square.piece] && this.piecesState.all[square.piece]) {
        console.log('teams', this.piecesState.all[this.selectedState.square.piece].team, this.piecesState.all[square.piece].team)
        const sameTeam = this.piecesState.all[this.selectedState.square.piece].team === this.piecesState.all[square.piece].team;
        if (sameTeam) {
          return;
        }
      }

      this.boardState.layout.map( iSquare => {
        if (iSquare === square) {
          iSquare.piece = this.selectedState.square.piece;
          this.store.dispatch(stateActions.selectedActions.updateLastSquare(iSquare));
        }
      });
      this.selectedState.square.piece = null;
      this.store.dispatch(stateActions.selectedActions.updateSelected(null));
    } else if (square.piece !== null) {
      console.log('piece', square.piece);
      this.store.dispatch(stateActions.selectedActions.updateSelected(square));
    }
  }

}
