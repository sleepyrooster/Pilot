import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  ChatSize: any;
  TaskSize: any;

  constructor(
    private db: AngularFirestore,
  ) { }

  ngOnInit() {
    this.db.collection('Tasks').get().subscribe(res => {
      this.TaskSize = res.size;
    });

    this.db.collection('Chats').get().subscribe(res => {
      this.ChatSize = res.size;
    });
  }
}
