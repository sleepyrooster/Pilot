import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssigCalendarPageRoutingModule } from './assig-calendar-routing.module';

import { AssigCalendarPage } from './assig-calendar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssigCalendarPageRoutingModule
  ],
  declarations: [AssigCalendarPage]
})
export class AssigCalendarPageModule {}
