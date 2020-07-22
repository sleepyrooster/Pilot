import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CredentialUpdatePageRoutingModule } from './credential-update-routing.module';

import { CredentialUpdatePage } from './credential-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CredentialUpdatePageRoutingModule
  ],
  declarations: [CredentialUpdatePage]
})
export class CredentialUpdatePageModule {}
