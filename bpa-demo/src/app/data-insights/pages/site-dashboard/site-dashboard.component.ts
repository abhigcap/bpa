

import { Component, OnInit } from '@angular/core';
import * as Highcharts from "highcharts";
declare var require: any;
import Histogram from 'highcharts/modules/histogram-bellcurve';
Histogram(Highcharts);
const Exporting = require('highcharts/modules/exporting');
Exporting(Highcharts);
const ExportData = require('highcharts/modules/export-data');
ExportData(Highcharts);

@Component({
  selector: 'app-site-dashboard',
  templateUrl: './site-dashboard.component.html',
  styleUrls: ['./site-dashboard.component.scss']
})
export class SiteDashboardComponent implements OnInit{

  constructor() {
  }
  public ngOnInit(): void {
  }  
}