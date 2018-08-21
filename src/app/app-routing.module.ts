import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BoardComponent} from './board/board.component';

const routes: Routes = [
  {path: 'board', component: BoardComponent},
  {path: '**', redirectTo: 'board'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
