import { WorldCollection } from './world.collection';
import { GameCollection } from './game.collection';
import { PlayerCollection } from './player.collection';

export interface AzimutDatabaseCollections {
  worlds: WorldCollection;
  games: GameCollection;
  players: PlayerCollection;
}
