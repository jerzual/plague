import RxDB, { RxDatabase, RxDatabaseCreator } from 'rxdb';
import { InjectionToken } from '@angular/core';
import { AzimutDatabaseCollections } from './collections';

/**
 * Injection token for RxDB configuration.
 * Allows to pass in memory or real indexed db config depending on context.
 */
export const RXDB_CONFIG: InjectionToken<
  RxDatabaseCreator
> = new InjectionToken<RxDatabaseCreator>('RXDB_CONFIG');

/**
 * RxDb azimut database instance
 */
export const RXDB_DATABASE: InjectionToken<
  RxDatabase<AzimutDatabaseCollections>
> = new InjectionToken<RxDatabase<AzimutDatabaseCollections>>('RXDB_DATABASE');

export async function createDatabase(
  config?: RxDatabaseCreator,
): Promise<RxDatabase<AzimutDatabaseCollections>> {
  RxDB.plugin(require('pouchdb-adapter-memory'));
  RxDB.plugin(require('pouchdb-adapter-idb'));
  return await RxDB.create<AzimutDatabaseCollections>({
    ...config,
    name: 'azimut',
    multiInstance: true, // <- multiInstance (optional, default: true)
    queryChangeDetection: false, // <- queryChangeDetection (optional, default: false) });
  });
}
