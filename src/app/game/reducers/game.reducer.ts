import { GameActions, GameActionTypes } from '../actions/game.actions';
import { createSelector } from '@ngrx/store';
import * as fromRoot from '../../reducers';
export const gameFeatureKey = 'game';

export interface State {
  items: any[];
  world: object;
  actors: any[];
  createdAt?: number;
  pausedAt?: number;
}

export const initialState: State = {
  world: {},
  actors: [],
  items: [],
};

export function reducer(state = initialState, action: GameActions): State {
  switch (action.type) {
    case GameActionTypes.LoadGame:
      return state;

    case GameActionTypes.NewGame:
      return state;
    case GameActionTypes.QuitGame:
      return state;
    default:
      return state;
  }
}

export const selectGameState = (state: fromRoot.State) => state.game;

export const selectActors = createSelector(
  selectGameState,
  (state: State) => state.actors,
);
export const selectWorld = createSelector(
  selectGameState,
  (state: State) => state.world,
);
