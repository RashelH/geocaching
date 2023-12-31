import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'tabs',
    loadChildren: () => import('../tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('../perfil/perfil.module').then( m => m.PerfilPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
