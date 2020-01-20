import { TestBed, async } from '@angular/core/testing';
import { RxDatabase, RxDatabaseCreator } from 'rxdb';
import { RXDB_DATABASE, RXDB_CONFIG } from './dabase.factory';
import { DatabaseModule } from './database.module';
import { StoreModule, Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import * as fromDatabase from './reducers/database.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AzimutDatabaseCollections } from './collections';

describe('DatabaseModule', () => {
  let store: MockStore<{ initialized: boolean }>;
  let config: RxDatabaseCreator;
  const initialState = { initialized: false };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: RXDB_CONFIG,
          useValue: {
            adapter: 'memory',
            name: 'azimut',
          },
        },
      ],
      imports: [
        DatabaseModule,
        StoreModule.forRoot({
          [fromDatabase.databaseFeatureKey]: fromDatabase.reducer,
        }),
        EffectsModule.forRoot([]),
      ],
    });
    store = TestBed.get(Store);
    config = TestBed.get(RXDB_CONFIG);
  }));
  it('can create RxDB instance', () => {
    const rxdb: RxDatabase<AzimutDatabaseCollections> = TestBed.get<
      RxDatabase<AzimutDatabaseCollections>
    >(RXDB_DATABASE);
    expect(rxdb).toBeDefined();
    expect(config.name).toBe('azimut');
  });

  it('has injected default configuration', () => {
    const rxdbConfig: RxDatabaseCreator = TestBed.get(RXDB_CONFIG);
    expect(rxdbConfig).toBeDefined();
    expect(rxdbConfig.adapter).toBe('memory');
  });
});
