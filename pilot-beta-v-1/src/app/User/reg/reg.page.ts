import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.page.html',
  styleUrls: ['./reg.page.scss'],
})
export class RegPage implements OnInit {
  displayName: string;
  email: string;
  division: string;
  year: string;
  cpassword: string;
  password: string;

  constructor(
    private auth: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  SignIn() {
    this.auth.Registration(this.displayName, this.division, this.year, this.email, this.cpassword, this.password);
  }

  // Navigate back to Log In
  LogIn() {
    this.router.navigate(['/log-in']);
  }
}
