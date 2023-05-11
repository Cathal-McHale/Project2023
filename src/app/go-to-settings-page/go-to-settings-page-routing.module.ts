import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoToSettingsPagePage } from './go-to-settings-page.page';

const routes: Routes = [
  {
    path: '',
    component: GoToSettingsPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoToSettingsPagePageRoutingModule {}
