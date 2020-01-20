import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { GameRoutingModule } from './game-routing.module';
import * as fromGame from './reducers/game.reducer';
import { GameEffects } from './effects/game.effects';
import { GamePlayComponent } from './components/game-play/game-play.component';
import { GamesListComponent } from './containers/games-list/games-list.component';
import { GameItemComponent } from './components/game-item/game-item.component';
import { PartySelectorComponent } from './containers/party-selector/party-selector.component';
import { PartyMemberComponent } from './components/party-member/party-member.component';
import { ActionBarComponent } from './containers/action-bar/action-bar.component';
import { MiniMapComponent } from './containers/mini-map/mini-map.component';

@NgModule({
  imports: [
    CommonModule,
    GameRoutingModule,
    StoreModule.forFeature(fromGame.gameFeatureKey, fromGame.reducer),
    EffectsModule.forFeature([GameEffects]),
  ],
  declarations: [
    GamePlayComponent,
    GamesListComponent,
    GameItemComponent,
    PartySelectorComponent,
    PartyMemberComponent,
    ActionBarComponent,
    MiniMapComponent,
  ],
  entryComponents: [GamePlayComponent],
})
export class GameModule {}
