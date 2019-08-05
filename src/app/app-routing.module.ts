//Cl-Routing
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/ci-dashboard', pathMatch: 'full' },
  { path: 'ci-dashboard', 
  loadChildren: () => import('./dashboard/dashboard.module').then(mod => mod.DashboardModule) },
  { path: 'detail/:id', loadChildren: () => import('./hero-detail/hero-detail.module').then(mod => mod.HeroDetailModule) },
  { path: 'ci-heroes', loadChildren: () => import('./heroes/heroes.module').then(mod => mod.HeroesModule) }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
