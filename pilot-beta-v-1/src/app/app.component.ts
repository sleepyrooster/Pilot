import { Component } from '@angular/core';

import { Platform, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { OneSignal } from '@ionic-native/onesignal/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private onesignal: OneSignal,
    private alertCtrl: AlertController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      // OneSignal Coding
      if (this.platform.is('cordova')) {
        this.setupPush();
      }
    });
  }

  setupPush() {
    this.onesignal.startInit('8bb177fa-638f-4324-874c-12f3731ab330', '482159981090');

    this.onesignal.inFocusDisplaying(this.onesignal.OSInFocusDisplayOption.InAppAlert);

    this.onesignal.handleNotificationReceived().subscribe( data => {
      const msg = data.payload.body;
      const title = data.payload.title;
      const additionalData = data.payload.additionalData;
      this.showAlert(title, msg, additionalData.task);

    });

    this.onesignal.handleNotificationOpened().subscribe( data => {
      const additionalData = data.notification.payload.additionalData;

      this.showAlert('Notification Opened', 'You have already read this before', additionalData.task);
    });

    this.onesignal.endInit();
  }


  async showAlert(title, msg, task) {
    const alert = this.alertCtrl.create({
      header: title,
      subHeader: msg,
      buttons: [
        {
          text: `Action: ${task}`,
          handler: () => {
            //  Navigate to somewhere
          }
        }
      ]
    });
  }

}
