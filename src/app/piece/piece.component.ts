import {Component, Input, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';

@Component({
  selector: 'vf-piece',
  templateUrl: './piece.component.html',
  styleUrls: ['./piece.component.scss']
})
export class PieceComponent implements OnInit {
  @Input()
  public number;
  public piecesState;
  constructor(public store: Store<any>) { }

  ngOnInit() {
    this.store.select('piecesState').subscribe( piecesState => {
      this.piecesState = piecesState;
    });
  }

  public pieceStyle(piece) {
    return {color: piece.team === 'primary' ? 'green' : 'red'};
  }
}
