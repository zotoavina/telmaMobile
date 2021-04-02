import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./Pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'inscription',
    loadChildren: () => import('./Pages/inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
  {
    path: 'compte',
    loadChildren: () => import('./Pages/compte/compte.module').then( m => m.ComptePageModule)
  },
  {
    path: 'offre',
    loadChildren: () => import('./Pages/offre/offre.module').then( m => m.OffrePageModule)
  },
  {
    path: 'offre/:id',
    loadChildren: () => import('./Pages/forfait/forfait.module').then( m => m.ForfaitPageModule)
  },
  {
    path: 'forfait/:id/info',
    loadChildren: () => import('./Pages/info-forfait/info-forfait.module').then( m => m.InfoForfaitPageModule)
  },
  {
    path: 'forfait/:id/:nom/achat',
    loadChildren: () => import('./Pages/achat/achat.module').then( m => m.AchatPageModule)
  },

  





]
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}  

