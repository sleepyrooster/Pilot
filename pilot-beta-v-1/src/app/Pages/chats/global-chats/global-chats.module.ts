import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GlobalChatsPageRoutingModule } from './global-chats-routing.module';

import { GlobalChatsPage } from './global-chats.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GlobalChatsPageRoutingModule
  ],
  declarations: [GlobalChatsPage]
})
export class GlobalChatsPageModule {}
