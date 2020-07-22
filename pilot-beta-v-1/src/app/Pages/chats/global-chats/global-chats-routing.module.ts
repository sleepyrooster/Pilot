import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GlobalChatsPage } from './global-chats.page';

const routes: Routes = [
  {
    path: '',
    component: GlobalChatsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GlobalChatsPageRoutingModule {}
