import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage implements OnInit {
  email: string;
  password: string;

  constructor(
    private router: Router,
    private auth: AuthService,
    private afAuth: AngularFireAuth
  ) {
    this.afAuth.onAuthStateChanged(user => {
      if (user) {
        this.router.navigate(['/tabs']);
      } else {
        return null ;
      }
    });
  }

  ngOnInit() {
  }

  // Logging into app
  LogIn() {
    this.auth.LogIn(this.email, this.password);
  }

  // navigate back to registration
  SignUp() {
this.router.navigate(['/reg']);
  }

  GoogleLogin() {
    this.auth.googleSignIn();
  }
}
