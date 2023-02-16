import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteDashboardComponent } from './site-dashboard/site-dashboard.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { EnterpriseDashboardComponent } from './enterprise-dashboard/enterprise-dashboard.component';
import { SiteFilterComponent } from './site-filter/site-filter.component';
import { SiteMetricTabComponent } from './site-metric-tab/site-metric-tab.component';
import { BpiContributorComponent } from './bpi-contributor/bpi-contributor.component';
import { AgGridModule } from 'ag-grid-angular';
import { BatchPerformanceListComponent } from './batch-performance-list/batch-performance-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HighchartsChartModule } from "highcharts-angular";
import { GoogleSdkComponent } from './shared/components/google-sdk/google-sdk.component';
import { RouterModule, Routes } from '@angular/router';
import { SiteDetailsCardComponent } from './shared/components/site-details-card/site-details-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteDashboardComponent,
    HeaderComponentComponent,
    EnterpriseDashboardComponent,
    SiteFilterComponent,
    SiteMetricTabComponent,
    BpiContributorComponent,
    BatchPerformanceListComponent,
    GoogleSdkComponent,
    SiteDetailsCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgGridModule,
    HighchartsChartModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
