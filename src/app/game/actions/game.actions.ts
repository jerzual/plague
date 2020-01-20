import { Action } from '@ngrx/store';

export enum GameActionTypes {
  LoadGame = '[Game] Load Game',
  LoadGameSuccess = '[Game] Game Loaded',
  NewGame = '[Game] New Game',
  QuitGame = '[Game] Quit Game',
}

export class LoadGame implements Action {
  readonly type = GameActionTypes.LoadGame;
}
export class LoadGameSuccess implements Action {
  readonly type = GameActionTypes.LoadGameSuccess;
}

export class NewGame implements Action {
  readonly type = GameActionTypes.NewGame;
}

export class QuitGame implements Action {
  readonly type = GameActionTypes.QuitGame;
}

export type GameActions = LoadGame | NewGame | QuitGame;
