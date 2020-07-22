import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CredentialUpdatePage } from './credential-update.page';

const routes: Routes = [
  {
    path: '',
    component: CredentialUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CredentialUpdatePageRoutingModule {}
