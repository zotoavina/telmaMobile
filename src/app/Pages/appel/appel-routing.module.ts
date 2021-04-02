import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppelPage } from './appel.page';

const routes: Routes = [
  {
    path: '',
    component: AppelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppelPageRoutingModule {}
