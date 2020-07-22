import { Component, OnInit } from '@angular/core';
import { ContactsService, Contact } from 'src/app/Services/contacts.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {
  Users: Contact[];

  constructor(
    private contactService: ContactsService,
  ) { }

  ngOnInit() {
    this.contactService.getContacts().subscribe(res => {
      this.Users = res;
    });
  }
}
