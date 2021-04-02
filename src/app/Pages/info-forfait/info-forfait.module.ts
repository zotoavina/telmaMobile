import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoForfaitPageRoutingModule } from './info-forfait-routing.module';

import { InfoForfaitPage } from './info-forfait.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoForfaitPageRoutingModule
  ],
  declarations: [InfoForfaitPage]
})
export class InfoForfaitPageModule {}
