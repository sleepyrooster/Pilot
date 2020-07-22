import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(
    private afAuth: AngularFireAuth,
    private actionSheetController: ActionSheetController,
    private router: Router
    ) { }

    ngOnInit() {
    }

    changeColor() {

    }

   async signOut() {
   const actionSheet = await this.actionSheetController.create({
       header: 'Do You Want To Sign Out',
       buttons: [{
         text: 'Log Out',
         role: 'destructive',
         icon: 'Log-out',
         handler: () => {
          this.afAuth.signOut()
          .then((outputData) => {
            this.router.navigate(['/log-in']);
            console.log(outputData);
          });
         }
       },
       {
         text: 'Cancel',
         icon: 'close',
         role: 'cancel',
         handler: () => {
           console.log('Cancel clicked');
         }
       }
      ]
     });

   await actionSheet.present();

    }

}
