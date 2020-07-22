import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AuthService } from 'src/app/Services/auth.service';
import { map, switchMap } from 'rxjs/operators';
import { Observable, combineLatest, of } from 'rxjs';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

export interface ChatData {
  uid?;
  displayName?;
  CreatedAt?: any;
  Content?: any;
 }

@Injectable({
  providedIn: 'root'
})
export class ChatsService {
  chatCollection: AngularFirestoreCollection<ChatData>;
  Chats: Observable <ChatData[]>;

  uid: any;
  displayName: string;
  user: string;

  constructor(
    private db: AngularFirestore,
    private auth: AuthService,
    private router: Router,
  ) {
        // Giving a varible to the collection
        this.chatCollection = this.db.collection<ChatData>('Chats');

        // To get the document ID
        this.Chats = this.chatCollection.snapshotChanges().pipe(
          map(action => {
            return action.map(a => {
              const data = a.payload.doc.data();
              const id = a.payload.doc.id;
              return { id, ...data };
            });
          })
        );
   }

   // Showing all the chatrooms
   getChatRooms() {

   }

    // Getting all the documents from the collection
  getChats() {
    return this.Chats;
  }


  // Getting one document from the collection
  getChat(id) {
    return this.chatCollection.doc<ChatData>(id).valueChanges();
  }

  // Sending a message to the collection
  NewMessage(message: ChatData) {
   return this.chatCollection.add(message);
  }

  deleteMessage(id) {
   return this.chatCollection.doc(id).delete();
  }

 async updateMessage(id: string) {
    const { uid } = await this.auth.getUser();
    return this.chatCollection.doc(id).update({uid});
  }

  /* Creating A New Chat
  async create() {
    const { uid } = await this.auth.getUser();
    const { displayName } = await this.auth.getUser();

    const data = {
      uid,
      displayName,
      createdAt: Date.now(),
      count: 0,
      messages: []
    };

    const docRef = await this.db.collection('Chats').add(data);

    return this.router.navigate(['/private-chat', docRef.id]);
  } */

  // Sending A Message
  async sendMessage(id, content) {
    const { uid } = await this.auth.getUser();
    const { displayName } = await this.auth.getUser();

    const data = {
      uid,
      displayName,
      content,
      createdAt: Date.now()
    };

    if (uid) {
      const ref = this.db.collection('Chats').doc(id);
      return ref.update({
        messages: firebase.firestore.FieldValue.arrayUnion(data)
      });
    }
  }
}
