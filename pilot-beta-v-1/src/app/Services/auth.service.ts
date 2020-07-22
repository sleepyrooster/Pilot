import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { ToastController, AlertController, ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';

import { Observable, of } from 'rxjs';
import { switchMap, first } from 'rxjs/operators';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<any>;
  user: Observable<firebase.User>;

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFirestore,
    private toastCtrl: ToastController,
    private router: Router,
    private alert: AlertController,
    private actionSheetController: ActionSheetController,
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.db.doc<any>(`User/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
    this.user = this.afAuth.authState;
  }

  // Logging In Using Email And Password
  LogIn(email, password) {
    this.afAuth.signInWithEmailAndPassword(email, password)
      .then((userObject) => {
        // Navigate to Home Page
        this.router.navigate(['/tabs']);
        console.log(userObject);
      }).catch((err) => {
        this.toastCtrl.create({
          message: err.message,
          duration: 3000
        }).then((toast) => {
          toast.present();
        });
      });
  }

  // Getting the user from the database

  getUser() {
    return this.user$.pipe(first()).toPromise();
  }

  // Google SignIn Using The Angularfire 2

  googleSignIn() {
    const provider = new auth.GoogleAuthProvider();
    this.router.navigate(['/tabs']);
    return this.oAuthLogin(provider);
  }

  private async oAuthLogin(provider) {
    const credential = await this.afAuth.signInWithPopup(provider);
    return this.updateUserData(credential.user);
  }

  private updateUserData({ uid, email, displayName, photoURL }) {
    const userRef: AngularFirestoreDocument<any> = this.db.doc(`Users/${uid}`);

    const data = {
      uid,
      email,
      displayName,
      photoURL
    };

    return userRef.set(data, { merge: true });
  }


  // Creating A New User With Email And Password

  Registration(displayName, division, year, email, cpassword, password) {
    if (cpassword !== password) {
      this.showAlert('Error', 'Password don\'t match');
      return console.error('Password doesn\'t match');
    }
    const data = {
      displayName,
      division,
      year,
      email,
    };

    // Creating A New User
    this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((userData) => {
        // Navigate To Home Page
        this.router.navigate(['/tabs']);
        console.log(userData);
        // New user to database
        this.db.collection('Users').add(data);
      }).catch((err) => {
        this.toastCtrl.create({
          message: err.message,
          duration: 3000
        }).then((toast) => {
          toast.present();
        });
      });

  }


  async showAlert(header: string, message: string) {
    const alert = await this.alert.create({
      header,
      message,
      buttons: ['ok']
    });
    await alert.present();
  }
}
