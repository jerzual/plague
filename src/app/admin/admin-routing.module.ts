import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminRootComponent } from './components/admin-root/admin-root.component';
import { WorldListComponent } from './containers/world-list/world-list.component';
import { PlayerListComponent } from './containers/player-list/player-list.component';


const routes: Routes = [{
  path: '',
  component: AdminRootComponent,
  children: [
    {path: 'worlds', component: WorldListComponent},
    {path: 'players', component: PlayerListComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
