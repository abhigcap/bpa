import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataInsightsComponent } from './data-insights.component';
import { SiteDashboardComponent } from './pages/site-dashboard/site-dashboard.component';
import { HighchartsChartModule } from "highcharts-angular";
import { SiteFilterComponent } from './pages/site-filter/site-filter.component';
import { SiteMetricTabComponent } from './pages/site-metric-tab/site-metric-tab.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { HistogramChartComponent } from './pages/histogram-chart/histogram-chart.component';
import { BatchPerformanceListComponent } from './pages/batch-performance-list/batch-performance-list.component';
import { BpiContributorComponent } from './pages/bpi-contributor/bpi-contributor.component';
import { HeaderComponentComponent } from './pages/header-component/header-component.component';
import { EnterpriseDashboardComponent } from './pages/enterprise-dashboard/enterprise-dashboard.component';
import { TrendChartComponent } from './pages/trend-chart/trend-chart.component';
import { DataInsightsRoutingModule } from './data-insights.routing.module';
import { HeaderComponent } from '../shared/layout/header/header.component';
import { GetPropertyListPipe } from '../shared/pipes/get-property-list.pipe';

@NgModule({
  declarations: [
     SiteDashboardComponent,
     SiteFilterComponent,
     SiteMetricTabComponent,
     HistogramChartComponent,
     BatchPerformanceListComponent,
     BpiContributorComponent,   
     EnterpriseDashboardComponent,
     TrendChartComponent,
     HeaderComponentComponent,
     DataInsightsComponent,
     HeaderComponent,
     GetPropertyListPipe
    ],
  imports: [
    CommonModule,
    HighchartsChartModule,
    AgGridModule,
    HttpClientModule,
    DataInsightsRoutingModule,
  ],
  exports:[SiteFilterComponent]
})
export class DataInsightsModule { }
