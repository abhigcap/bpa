import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataInsightsComponent } from './data-insights/data-insights.component';
import { SiteDashboardComponent } from './data-insights/pages/site-dashboard/site-dashboard.component';

const routes: Routes = [
  {
    path: 'data-insights', component: DataInsightsComponent, 
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
