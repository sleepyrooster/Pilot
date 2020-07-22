import { Component, OnInit } from '@angular/core';

import { ChatsService, ChatData } from 'src/app/Services/chats.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-global-chats',
  templateUrl: './global-chats.page.html',
  styleUrls: ['./global-chats.page.scss'],
})
export class GlobalChatsPage implements OnInit {
  Messages: ChatData[];
  Content: any[];

  OwnerId: any;
  displayName: any;

  currentUser: 'user1';

  Message: ChatData = {
     uid: '',
     displayName: '',
     Content: 'Welcome to the Global Chat Room!!!',
     CreatedAt: new Date().getTime()
   };

  constructor(
    private cs: ChatsService,
    private afAuth: AngularFireAuth,
  ) {
    this.afAuth.onAuthStateChanged(user => {
      if (user) {
        // Assigning the user UID and DisplayName
        this.OwnerId = user.uid;
        this.displayName = user.displayName;

        // Assigning the new value to the object
        this.Message.uid = this.OwnerId;
        this.Message.displayName = this.displayName;
      }
    });
   }

  ngOnInit() {
    // tslint:disable-next-line: no-string-literal
     this.cs.getChats().subscribe( res => {
      this.Messages = res;
      this.Content = this.Messages;
      console.log(this.Messages);
      console.log(this.Content);
    });
  }

  sendMessage() {
    this.cs.NewMessage(this.Message);
  }

  trackByCreated(i, msg) {
    return msg.createdAt;
  }
}
