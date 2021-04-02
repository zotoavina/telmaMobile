import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoForfaitPage } from './info-forfait.page';

const routes: Routes = [
  {
    path: '',
    component: InfoForfaitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoForfaitPageRoutingModule {}
