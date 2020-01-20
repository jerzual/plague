import RxDB, { RxDatabase, RxCollection, RxJsonSchema, RxDocument } from 'rxdb';

export interface WorldDocType {
  worldId: string;
  levels: string;
  lastName: string;
  age?: number; // optional
}
// We also add some ORM-methods for the document.

export interface WorldDocMethods {
  scream: (v: string) => string;
}
// We can merge these into our WorldDocument.

export type WorldDocument = RxDocument<WorldDocType, WorldDocMethods>;
// Now we can define type for the collection which contains the documents.

// we declare one static ORM-method for the collection
export interface WorldCollectionMethods {
  countAllDocuments: () => Promise<number>;
}

// and then merge all our types
export type WorldCollection = RxCollection<
  WorldDocType,
  WorldDocMethods,
  WorldCollectionMethods
>;
