import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'log-in',
    pathMatch: 'full'
  },
  {
    path: 'log-in',
    loadChildren: () => import('./User/log-in/log-in.module').then( m => m.LogInPageModule)
  },
  {
    path: 'reg',
    loadChildren: () => import('./User/reg/reg.module').then( m => m.RegPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./Pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'feeds',
    loadChildren: () => import('./Pages/feeds/feeds.module').then( m => m.FeedsPageModule)
  },
  {
    path: 'contacts',
    loadChildren: () => import('./Pages/contacts/contacts.module').then( m => m.ContactsPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./Pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'chats',
    loadChildren: () => import('./Pages/chats/chats.module').then( m => m.ChatsPageModule)
  },
  {
    path: 'tasks',
    loadChildren: () => import('./Pages/tasks/tasks.module').then( m => m.TasksPageModule)
  },
  // branch tabs
  {
    path: 'new-checklist',
    loadChildren: () => import('./Pages/tasks/new-checklist/new-checklist.module').then( m => m.NewChecklistPageModule)
  },
  {
    path: 'new-checklist/:id',
    loadChildren: () => import('./Pages/tasks/new-checklist/new-checklist.module').then( m => m.NewChecklistPageModule)
  },
  {
    path: 'global-chats',
    loadChildren: () => import('./Pages/chats/global-chats/global-chats.module').then( m => m.GlobalChatsPageModule)
  },
  {
    path: 'credential-update',
    loadChildren: () => import('./Pages/settings/credential-update/credential-update.module').then( m => m.CredentialUpdatePageModule)
  },
  {
    path: 'credential-update/:id',
    loadChildren: () => import('./Pages/settings/credential-update/credential-update.module').then( m => m.CredentialUpdatePageModule)
  },
  {
    path: 'user-profile',
    loadChildren: () => import('./Pages/settings/user-profile/user-profile.module').then( m => m.UserProfilePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
