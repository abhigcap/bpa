import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { SiteDashboardComponent } from './admin/pages/site-dashboard/site-dashboard.component';

const routes: Routes = [
  {
    path: 'admin', component: AdminComponent, 
    children: [
      { path: 'dashboard', component: SiteDashboardComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
