import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/Services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {
  contacts: any[];
  constructor(
    private contactService: ContactsService,
  ) { }

  ngOnInit() {
    this.contactService.getContacts().subscribe(res => {
      this.contacts = res;
    });
  }
}
