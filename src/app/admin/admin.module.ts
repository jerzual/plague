import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromAdmin from './reducers/admin.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AdminEffects } from './effects/admin.effects';
import { AdminRootComponent } from './components/admin-root/admin-root.component';
import { AdminService } from './services/admin.service';
import { WorldListComponent } from './containers/world-list/world-list.component';
import { PlayerListComponent } from './containers/player-list/player-list.component';

@NgModule({
  declarations: [AdminRootComponent, WorldListComponent, PlayerListComponent],
  providers: [AdminService],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    StoreModule.forFeature(fromAdmin.adminFeatureKey, fromAdmin.reducer),
    EffectsModule.forFeature([AdminEffects]),
  ],
})
export class AdminModule {}
