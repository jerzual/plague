import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromDatabase from './reducers/database.reducer';
import { EffectsModule } from '@ngrx/effects';
import { DatabaseEffects } from './effects/database.effects';
import { RXDB_CONFIG, RXDB_DATABASE, createDatabase } from './dabase.factory';
import { RxDatabaseCreator } from 'rxdb';

@NgModule({
  declarations: [],
  providers: [
    {
      provide: RXDB_CONFIG,
      useValue: {
        name: 'azimut',
        adapter: 'idb',
      } as RxDatabaseCreator,
    },
    {
      provide: RXDB_DATABASE,
      useFactory: createDatabase,
      deps: [RXDB_CONFIG],
      multi: true,
    },
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromDatabase.databaseFeatureKey,
      fromDatabase.reducer,
    ),
    EffectsModule.forFeature([DatabaseEffects]),
  ],
})
export class DatabaseModule {}
