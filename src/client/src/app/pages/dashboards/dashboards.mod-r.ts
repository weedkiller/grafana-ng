import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageDashboardsComponent } from './dashboards';
import { FolderContentComponent } from './folder/content/folder-content';
import { FolderPermissionsComponent } from './folder/perms/folder-perms';


const routes: Routes = [
  { path: '', component: ManageDashboardsComponent },
  { path: 'f/:uid/:name', component: FolderContentComponent },
  { path: 'f/:uid/:name/permissions', component: FolderPermissionsComponent },
  
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardsRoutingModule { }
