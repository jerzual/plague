import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'games',
    loadChildren: () =>
      import('./game/game.module').then(mod => mod.GameModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then(mod => mod.AdminModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    enableTracing: false,
    initialNavigation: 'enabled'
}),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
