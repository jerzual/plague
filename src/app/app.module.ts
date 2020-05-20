import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { TransferHttpCacheModule } from '@nguniversal/common';

import { StoreModule, Store } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, DefaultRouterStateSerializer } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  reducers,
  metaReducers,
  REDUCERS_TOKEN,
} from './reducers';
import { AppEffects } from './app.effects';
import { environment } from '../environments/environment';
import { CoreModule } from './core/core.module';
import { SceneModule } from './scene/scene.module';
import { WindowService } from './core/services/window.service';
import { initApplication } from './app.initializer';

// For AoT compilation:
export function getWindow() {
  return window;
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'azimut' }),
    TransferHttpCacheModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    SceneModule,
    // ngrx
    StoreModule.forRoot(REDUCERS_TOKEN, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
    EffectsModule.forRoot([AppEffects]),
    StoreRouterConnectingModule.forRoot({ serializer: DefaultRouterStateSerializer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initApplication,
      deps: [Store],
      multi: true,
    },
    { provide: REDUCERS_TOKEN, useValue: reducers },
    {
      provide: WindowService,
      useFactory: getWindow,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
