import RxDB, { RxDatabase, RxCollection, RxJsonSchema, RxDocument } from 'rxdb';
// Then you can declare the base-type for your document.
// The base-type is basically the typescript-representation of the jsonschema of the collection.
// If you have many collections, you could also generate the base-type with json-schema-to-typescript

export interface PlayerDocType {
  passportId: string;
  firstName: string;
  lastName: string;
  userAgent?: string;
  hostAdress?: string;
  age?: number; // optional
}
// We also add some ORM-methods for the document.

export interface PlayerDocMethods {
  scream: (v: string) => string;
}
// We can merge these into our PlayerDocument.

export type PlayerDocument = RxDocument<PlayerDocType, PlayerDocMethods>;
// Now we can define type for the collection which contains the documents.

// we declare one static ORM-method for the collection
export interface PlayerCollectionMethods {
  countAllDocuments: () => Promise<number>;
}

// and then merge all our types
export type PlayerCollection = RxCollection<
  PlayerDocType,
  PlayerDocMethods,
  PlayerCollectionMethods
>;
