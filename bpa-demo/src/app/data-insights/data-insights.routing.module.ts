import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataInsightsComponent } from './data-insights.component';

const routes: Routes = [
    {
        path: 'dashboard', component: DataInsightsComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DataInsightsRoutingModule { }