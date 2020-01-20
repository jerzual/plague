import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamePlayComponent } from './components/game-play/game-play.component';
import { GamesListComponent } from './containers/games-list/games-list.component';

const routes: Routes = [
  {
    path: '',
    component: GamesListComponent,
  },
  {
    path: ':id',
    component: GamePlayComponent,
    // children: [{ path: 'play', component: GameUiComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameRoutingModule {}
