import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'tattoo',
    loadChildren: () => import('./pages/tattoo/tattoo.module').then(m => m.TattooModule)
  },
  {
    path: 'piercing',
    loadChildren: () => import('./pages/piercing/piercing.module').then(m => m.PiercingModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
