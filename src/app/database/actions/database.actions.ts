import { Action } from '@ngrx/store';

export enum DatabaseActionTypes {
  InitDatabase = '[Database] Initialize Database',
  SyncDatabase = '[Database] Synchronize Database',
}

export class InitDatabase implements Action {
  readonly type = DatabaseActionTypes.InitDatabase;
}
export class SyncDatabase implements Action {
  readonly type = DatabaseActionTypes.SyncDatabase;
}


export type DatabaseActions = InitDatabase | SyncDatabase;
