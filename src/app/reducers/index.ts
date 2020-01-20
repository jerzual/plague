import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromUserInterface from '../ui/reducers/user-interface.reducer';
import * as fromAdmin from '../admin/reducers/admin.reducer';
import * as fromGame from '../game/reducers/game.reducer';
import * as fromConfig from '../core/reducers/config.reducer';
import { InjectionToken } from '@angular/core';
import * as fromDatabase from '../database/reducers/database.reducer';

export interface State {

  [fromUserInterface.userInterfaceFeatureKey]: fromUserInterface.State;
  [fromAdmin.adminFeatureKey]: fromAdmin.State;
  [fromGame.gameFeatureKey]: fromGame.State;
  [fromConfig.configFeatureKey]: fromConfig.State;
  [fromDatabase.databaseFeatureKey]: fromDatabase.State;
}

export const reducers: ActionReducerMap<State> = {

  [fromUserInterface.userInterfaceFeatureKey]: fromUserInterface.reducer,
  [fromAdmin.adminFeatureKey]: fromAdmin.reducer,
  [fromGame.gameFeatureKey]: fromGame.reducer,
  [fromConfig.configFeatureKey]: fromConfig.reducer,
  [fromDatabase.databaseFeatureKey]: fromDatabase.reducer,
};
export const REDUCERS_TOKEN = new InjectionToken<ActionReducerMap<State>>('App Reducers');


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
