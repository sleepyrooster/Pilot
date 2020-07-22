import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssigCalendarPage } from './assig-calendar.page';

const routes: Routes = [
  {
    path: '',
    component: AssigCalendarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssigCalendarPageRoutingModule {}
