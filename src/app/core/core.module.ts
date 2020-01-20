import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './components/loading/loading.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import * as fromConfig from './reducers/config.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ConfigEffects } from './effects/config.effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [LoadingComponent, NotFoundComponent, HomeComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule,
    StoreModule.forFeature(fromConfig.configFeatureKey, fromConfig.reducer),
    EffectsModule.forFeature([ConfigEffects]),
  ],
  exports: [LoadingComponent, RouterModule],
})
export class CoreModule {}
