import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Contact {
  uid?: string;
  displayName: string;
  Division: string;
  Year: any;
  email: string;
  photoURL?: any;
}

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  ContactCollection: AngularFirestoreCollection<Contact>;
  Contacts: Observable<Contact[]>;

  constructor(
    private db: AngularFirestore,
  ) {

    // Assigning this variable to the collection
    this.ContactCollection = this.db.collection<Contact>('Users');

    // Assgining this variable to show the map of the database
    this.Contacts = this.ContactCollection.snapshotChanges().pipe(
      map(action => {
        return action.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );

  }

  // Loading all the documents from the collection
  getContacts() {
    return this.Contacts;
  }

  getContact(id) {
    return this.ContactCollection.doc<Contact>(id).valueChanges();
  }

  addTask(contact: Contact) {
    return this.ContactCollection.add(contact);
  }

  updateContact(id, contact) {
   return this.ContactCollection.doc<Contact>(id).update(contact);
  }
}
