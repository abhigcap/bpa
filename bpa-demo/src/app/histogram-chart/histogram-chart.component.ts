import { Component } from '@angular/core';
import * as Highcharts from "highcharts";
declare var require: any;
import Histogram from 'highcharts/modules/histogram-bellcurve';
Histogram(Highcharts);
const Exporting = require('highcharts/modules/exporting');
Exporting(Highcharts);
const ExportData = require('highcharts/modules/export-data');
ExportData(Highcharts);
@Component({
  selector: 'app-histogram-chart',
  templateUrl: './histogram-chart.component.html',
  styleUrls: ['./histogram-chart.component.scss']
})
export class HistogramChartComponent {
// Histogram variable  
public options: any;
constructor() {
}
public ngOnInit(): void {  
  this.HistogramChart();
}
 //=====================================================Histogram=================================================  
 public HistogramChart(): void {
  // var data = [3.5, 3, 3.2, 3.1, 3.6, 3.9, 3.4, 3.4, 2.9, 3.1, 3.7, 3.4, 3, 3, 4, 4.4, 3.9, 3.5, 3.8, 3.8, 3.4, 3.7, 3.6, 3.3, 3.4, 3, 3.4, 3.5, 3.4, 3.2, 3.1, 3.4, 4.1, 4.2, 3.1, 3.2, 3.5, 3.6, 3, 3.4, 3.5, 2.3, 3.2, 3.5, 3.8, 3, 3.8, 3.2, 3.7, 3.3, 3.2, 3.2, 3.1, 2.3, 2.8, 2.8, 3.3, 2.4, 2.9, 2.7, 2, 3, 2.2, 2.9, 2.9, 3.1, 3, 2.7, 2.2, 2.5, 3.2, 2.8, 2.5, 2.8, 2.9, 3, 2.8, 3, 2.9, 2.6, 2.4, 2.4, 2.7, 2.7, 3, 3.4, 3.1, 2.3, 3, 2.5, 2.6, 3, 2.6, 2.3, 2.7, 3, 2.9, 2.9, 2.5, 2.8, 3.3, 2.7, 3, 2.9, 3, 3, 2.5, 2.9, 2.5, 3.6, 3.2, 2.7, 3, 2.5, 2.8, 3.2, 3, 3.8, 2.6, 2.2, 3.2, 2.8, 2.8, 2.7, 3.3, 3.2, 2.8, 3, 2.8, 3, 2.8, 3.8, 2.8, 2.8, 2.6, 3, 3.4, 3.1, 3, 3.1, 3.1, 3.1, 2.7, 3.2, 3.3, 3, 2.5, 3, 3.4, 3];
   this.options = { 
       "chart": {
       "type": "column",
       "zoomType": "xy",
       "alignTicks": "false",
       "marginTop": 25,
       "showAxes": "true"      },
     "exporting": {
       "enabled": "false"      },
     "title": {
       "text": ""      },
     "credits": {
       "enabled": false      },
     "tooltip": {
       "enabled": false      },
     "plotOptions": {
       "column": {
         "stacking": "normal",
         "dataLabels": {
           "enabled": "true",
           "backgroundColor": "#F1F4F6",
           "y": -3,
           "verticalAlign": "top",
           "fontFamily": "Roboto",
           "color": "#2870A4"          }
       },
       "series": {
         "minPointLength": 1,
         "shadow": "false",
         "marker": {
           "enabled": "false"          }
       },
       "area": {}
     },
     "xAxis": {
       "minorTickLength": 0,
       "tickLength": 0,
       "softMin": 16016.880000000001,
       "softMax": 28032.88,
       "tickInterval": "auto",
       "plotLines": [{
         "value": 24000,
         "zIndex": 5,
         "color": "#AA0000",
         "width": 2,
         "label": {
           "text": " USL 24000.0",
           "textAlign": "right",
           "backgroundColor": "#F1F4F6",
           "fontFamily": "Roboto",
           "fontWeight": "bold",
           "fontsize": "16px",
           "rotation": 270,
           "x": -5,
           "style": {
             "fontFamily": "Roboto",
             "fontsize": "16px",
             "fontWeight": "bold"            }
         }
       }, {
         "value": 20000,
         "zIndex": 5,
         "color": "#AA0000",
         "width": 2,
         "label": {
           "text": " LSL 20000.0",
           "textAlign": "right",
           "backgroundColor": "#F1F4F6",
           "rotation": 270,
           "x": -5,
           "style": {
             "fontFamily": "Roboto",
             "fontsize": "16px",
             "fontWeight": "bold"            }
         }
       }, {
         "value": 26530.88,
         "zIndex": 5,
         "color": "#FE9C28",
         "dashStyle": "Solid",
         "width": 2,
         "label": {
           "text": " UCL 26530.88",
           "textAlign": "right",
           "backgroundColor": "#F1F4F6",
           "rotation": 270,
           "x": -5,
           "style": {
             "fontFamily": "Roboto",
             "fontsize": "16px",
             "fontWeight": "bold"            }
         }
       }, {
         "value": 17518.88,
         "zIndex": 5,
         "color": "#FE9C28",
         "dashStyle": "Solid",
         "width": 2,
         "label": {
           "text": " LCL 17518.88",
           "textAlign": "right",
           "backgroundColor": "#F1F4F6",
           "rotation": 270,
           "x": -5,
           "style": {
             "fontFamily": "Roboto",
             "fontsize": "16px",
             "fontWeight": "bold"            }
         }
       }, {
         "value": 22024.88,
         "zIndex": 5,
         "color": "#A1DDDC",
         "dashStyle": "Solid",
         "width": 2.5,
         "label": {
           "text": " Mean 22024.88",
           "verticalAlign": "middle",
           "backgroundColor": "#F1F4F6",
           "rotation": 270,
           "x": -5,
           "style": {
             "fontFamily": "Roboto",
             "fontsize": "16px",
             "fontWeight": "bold"            }
         }
       }]
     },
     "yAxis": {
       "title": {
         "text": "Batch Count",
         "style": {
           "fontWeight": "bold",
           "fontFamily": "Roboto",
           "fontsize": "16px"          }
       },
       "gridLineColor": "#e9e9e9",
       "tickWidth": 1,
       "tickLength": 3,
       "tickColor": "#ccc",
       "lineColor": "#ccc",
       "endOnTick": "false"      },
     "series": [{
       "name": "Viscosity",
       "data": [
         [26862.85, 2], {
           "x": 21791.42,
           "y": 27,
           "dataLabels": [{
             "align": "center",
             "format": "{y}",
             "inside": true            }, {
             "color": "#F1F4F6",
             "backgroundColor": "#3E4144",
             "style": {
               "fontSize": "7px",
               "fontFamily": "Roboto"              },
             "borderColor": "#3E4144",
             "borderWidth": 2,
             "padding": 5,
             "shadow": "true",
             "align": "center",
             "format": "CurrentBatch",
             "shape": "callout",
             "y": -25            }]
         },
         [22805.71, 6],
         [20777.14, 7],
         [23820, 2],
         [25848.57, 1]
       ],
       "visible": "true",
       "stacking": "normal",
       "pointRange": 1014.2857142857143,
       "borderWidth": 1,
       "borderColor": "#666",
       "pointPadding": 0.015,
       "groupPadding": 0,
       "color": "#2870A4"      }]
   };
   Highcharts.chart('container', this.options);
 }
}
