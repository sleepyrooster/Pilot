import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      // General tabs
      {
        path: 'feeds',
        loadChildren: () => import('../feeds/feeds.module').then( m => m.FeedsPageModule)
      },
      {
        path: 'contacts',
        loadChildren: () => import('../contacts/contacts.module').then( m => m.ContactsPageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../settings/settings.module').then( m => m.SettingsPageModule)
      },
      {
        path: 'chats',
        loadChildren: () => import('../chats/chats.module').then( m => m.ChatsPageModule)
      },
      {
        path: 'tasks',
        loadChildren: () => import('../tasks/tasks.module').then( m => m.TasksPageModule)
      },
      // branch tabs
      {
        path: 'tasks/checklist',
        loadChildren: () => import('../../Pages/tasks/checklist/checklist.module').then( m => m.ChecklistPageModule)
      },
      {
        path: 'tasks/assig-calendar',
        loadChildren: () => import('../../Pages/tasks/assig-calendar/assig-calendar.module').then( m => m.AssigCalendarPageModule)
      },
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/feeds',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
