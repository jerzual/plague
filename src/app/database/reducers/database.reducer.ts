import {
  DatabaseActions,
  DatabaseActionTypes,
} from '../actions/database.actions';

export const databaseFeatureKey = 'database';

export interface State {
  initialized: boolean;
  version: number;
  lastSyncDate?: number;
}

export const initialState: State = {
  version: 0,
  initialized: false,
};

export function reducer(state = initialState, action: DatabaseActions): State {
  switch (action.type) {
    case DatabaseActionTypes.InitDatabase:
      return { ...state, initialized: true };

    case DatabaseActionTypes.SyncDatabase:
      return { ...state, lastSyncDate: Date.now() };

    default:
      return state;
  }
}
