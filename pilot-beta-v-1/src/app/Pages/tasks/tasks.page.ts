import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})
export class TasksPage implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  // Navigate to Assignments
  OpenToAssignments() {
    this.router.navigateByUrl('/tabs/tabs/tasks/assig-calendar');
  }

  // Navigate to checklist
  OpenToChecklist() {
    this.router.navigateByUrl('/tabs/tabs/tasks/checklist');
  }
}
