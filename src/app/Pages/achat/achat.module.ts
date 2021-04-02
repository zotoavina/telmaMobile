import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AchatPageRoutingModule } from './achat-routing.module';

import { AchatPage } from './achat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AchatPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AchatPage]
})
export class AchatPageModule {}
