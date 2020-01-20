import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { DatabaseActionTypes, DatabaseActions } from '../actions/database.actions';



@Injectable()
export class DatabaseEffects {


  @Effect()
  initDatabase$ = this.actions$.pipe(
    ofType(DatabaseActionTypes.InitDatabase),
    /** An EMPTY observable only emits completion. Replace with your own observable API request */
    concatMap(() => EMPTY)
  );


  @Effect()
  syncDatabase$ = this.actions$.pipe(
    ofType(DatabaseActionTypes.SyncDatabase),
    /** An EMPTY observable only emits completion. Replace with your own observable API request */
    concatMap(() => EMPTY)
  );



  constructor(private actions$: Actions<DatabaseActions>) {}

}
