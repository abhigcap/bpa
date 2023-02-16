import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnterpriseDashboardComponent } from './enterprise-dashboard/enterprise-dashboard.component';
import { SiteDashboardComponent } from './site-dashboard/site-dashboard.component';

const routes: Routes = [
  { path: '', component: SiteDashboardComponent },
  { path: 'site', component: SiteDashboardComponent },
  { path: 'enterprise', component: EnterpriseDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
