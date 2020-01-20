import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../reducers';
import { NewGame, QuitGame } from '../actions/game.actions';
@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor(private readonly store: Store<fromRoot.State>) {}

  newGame() {
    this.store.dispatch(new NewGame());
  }

  quitGame() {
    this.store.dispatch(new QuitGame());
  }
}
