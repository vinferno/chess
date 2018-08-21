import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';

@Component({
  selector: 'vf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public $state;
  constructor(public store: Store<any>) {

  }

  ngOnInit() {
    this.store.subscribe( state => this.$state = state);
  }
}
