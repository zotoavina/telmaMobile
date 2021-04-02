import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppelPageRoutingModule } from './appel-routing.module';

import { AppelPage } from './appel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppelPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AppelPage]
})
export class AppelPageModule {}
