import { Component, OnInit } from '@angular/core';

import { TasksService, TaskData } from 'src/app/Services/tasks.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-new-checklist',
  templateUrl: './new-checklist.page.html',
  styleUrls: ['./new-checklist.page.scss'],
})
export class NewChecklistPage implements OnInit {

  taskId: null;
  OwnerId: any;

   Task: TaskData = {
    Title: 'Test123',
    Description: 'This is an example',
    LastDate: new Date().getTime(),
    Owner: '',
  };

  constructor(
    private ts: TasksService,
    private afAuth: AngularFireAuth,
    private route: ActivatedRoute,
    private loadingController: LoadingController,
    private nav: NavController,
  ) {
    this.afAuth.onAuthStateChanged(user => {
      if (user) {
        this.OwnerId = user.uid;
        // Assigning the new value to the object
        this.Task.Owner = this.OwnerId;
      }
    });
   }

  ngOnInit() {
    // tslint:disable-next-line: no-string-literal
    this.taskId = this.route.snapshot.params['id'];
    if (this.taskId) {
      this.loadTask();
    }
  }

  async loadTask() {
    const loading = await this.loadingController.create({
      message: 'Loading Task...',
    });

    await loading.present();

    this.ts.getTask(this.taskId).subscribe(res => {
      loading.dismiss();
      this.Task = res;
    });
  }

  async saveTask() {
    const loading = await this.loadingController.create({
      message: 'Saving Task...',
    });

    await loading.present();
    if (this.taskId) {
    this.ts.updateTask(this.taskId, this.Task).then((updatedData) => {
      loading.dismiss();
      this.nav.navigateBack('/tabs/tabs/task/checklist');
      console.log(updatedData);
    });

    } else {
      this.ts.addTask(this.Task).then((newData) => {
        loading.dismiss();
        this.nav.navigateBack('/tabs/tabs/task/checklist');
        console.log(newData);
      });
     }
}
}
