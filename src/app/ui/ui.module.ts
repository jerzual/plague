import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AngularDraggableModule } from 'angular2-draggable';

import * as fromUserInterface from './reducers/user-interface.reducer';

import { UserInterfaceEffects } from './effects/user-interface.effects';
import { WidgetComponent } from './components/widget/widget.component';
import { WidgetsContainerComponent } from './containers/widgets-container/widgets-container.component';
import { OverlayComponent } from './components/overlay/overlay.component';
import { ModalComponent } from './components/modal/modal.component';
import { InputComponent } from './form/input/input.component';
import { RangeComponent } from './form/range/range.component';
import { ButtonComponent } from './form/button/button.component';

@NgModule({
  declarations: [
    WidgetComponent,
    WidgetsContainerComponent,
    OverlayComponent,
    ModalComponent,
    InputComponent,
    RangeComponent,
    ButtonComponent,
  ],
  imports: [
    CommonModule,
    AngularDraggableModule,
    StoreModule.forFeature(
      fromUserInterface.userInterfaceFeatureKey,
      fromUserInterface.reducer,
    ),
    EffectsModule.forFeature([UserInterfaceEffects]),
  ],
})
export class UiModule {}
