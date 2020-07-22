import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { OneSignal } from '@ionic-native/onesignal/ngx';

const firebaseConfig = {
  apiKey: 'AIzaSyBSbCPtXaeroCdwUXjuT39eCLpzb9kbB3I',
  authDomain: 'pilot-test-59b3b.firebaseapp.com',
  databaseURL: 'https://pilot-test-59b3b.firebaseio.com',
  projectId: 'pilot-test-59b3b',
  storageBucket: 'pilot-test-59b3b.appspot.com',
  messagingSenderId: '482159981090',
  appId: '1:482159981090:web:f17706343a4f775e1e907b',
  measurementId: 'G-ML348XJ2J3'
};


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
  ],
  providers: [
    OneSignal,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
