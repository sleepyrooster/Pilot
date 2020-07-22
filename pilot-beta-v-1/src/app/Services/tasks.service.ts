import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';

export interface TaskData {
  id?;
  Title: string;
  Description: string;
  LastDate: any;
  Owner?;
}

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  TaskCollection: AngularFirestoreCollection<TaskData>;
  Tasks: Observable<TaskData[]>;

  ownerUid: any;

  constructor(
    private db: AngularFirestore,
    private afAuth: AngularFireAuth,
  ) {
    // adding a collection to a variable
    this.TaskCollection = this.db.collection<TaskData>('Tasks');

    // getting a snapshot of the database
    this.Tasks = this.TaskCollection.snapshotChanges().pipe(
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
  getTasks() {
    return this.Tasks;
  }
  // Loading one document from the collection
  getTask(id) {
   return this.TaskCollection.doc<TaskData>(id).valueChanges();
  }

  // Updating A Task
  // tslint:disable-next-line: no-shadowed-variable
  updateTask(id: string, Task: TaskData) {
    return this.TaskCollection.doc<TaskData>(id).update(Task);
  }

  // Adding A Task
  // tslint:disable-next-line: no-shadowed-variable
  addTask(Task: TaskData) {
    return this.TaskCollection.add(Task);
  }

  // Deleting A Task
  deleteTask(id) {
    return this.TaskCollection.doc(id).delete();
  }
}
