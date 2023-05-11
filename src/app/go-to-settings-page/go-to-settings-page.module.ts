import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GoToSettingsPagePageRoutingModule } from './go-to-settings-page-routing.module';

import { GoToSettingsPagePage } from './go-to-settings-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoToSettingsPagePageRoutingModule
  ],
  declarations: [GoToSettingsPagePage]
})
export class GoToSettingsPagePageModule {}
