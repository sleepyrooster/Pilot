import { Component, OnInit } from '@angular/core';

import { ContactsService, Contact } from 'src/app/Services/contacts.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-credential-update',
  templateUrl: './credential-update.page.html',
  styleUrls: ['./credential-update.page.scss'],
})
export class CredentialUpdatePage implements OnInit {
  contactId: null;

  Contacts: Contact = {
    displayName: '',
    Division: '',
    Year: '',
    email: '',
    photoURL: '',
  };


  constructor(
    private contactsService: ContactsService,
    private afAuth: AngularFireAuth,
    private route: ActivatedRoute,
    private loadingController: LoadingController,
    private nav: NavController,
  ) { }

  ngOnInit() {
    // tslint:disable-next-line: no-string-literal
    this.contactId = this.route.snapshot.params['id'];
    if (this.contactId) {
      this.loadTask();
    }
  }

  async loadTask() {
    const loading = await this.loadingController.create({
      message: 'Loading Task...',
    });

    await loading.present();

    this.contactsService.getContact(this.contactId).subscribe(res => {
      loading.dismiss();
      this.Contacts = res;
    });
  }

  async saveContact() {
    const loading = await this.loadingController.create({
      message: 'Saving Task...',
    });

    await loading.present();
    if (this.contactId) {
    this.contactsService.updateContact(this.contactId, this.Contacts).then((updatedData) => {
      loading.dismiss();
      this.nav.navigateBack('/user-profile');
      console.log(updatedData);
    });

    } else {
      this.contactsService.addTask(this.Contacts).then((newData) => {
        loading.dismiss();
        this.nav.navigateBack('/user-profile');
        console.log(newData);
      });
     }
}
}
