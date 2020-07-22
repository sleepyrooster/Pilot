import { Component, OnInit } from '@angular/core';
import { TasksService, TaskData } from 'src/app/Services/tasks.service';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.page.html',
  styleUrls: ['./checklist.page.scss'],
})
export class ChecklistPage implements OnInit {
  Tasks: TaskData[];

  constructor(
    private ts: TasksService,
  ) { }

  ngOnInit() {
    this.ts.getTasks().subscribe(res => {
      this.Tasks = res;
    });
  }

  remove(item) {
    this.ts.deleteTask(item.id);
  }

}
