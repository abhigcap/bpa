

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
  public loadingData: boolean = true;
  public dateProduction: Date = new Date();
  public updateFlag: boolean = true;
  public oneToOneFlag: boolean = true;
  public Highcharts: any = Highcharts;
  public chartConstructor: string = "chart";
  public progressTracking: any;
  // Histogram variable  
  public options: any;
  constructor() {
  }
  public ngOnInit(): void {
    this.loadingData = false;
    this.TrendChart();
    this.HistogramChart();
  }
  public chartCallback(): void {
    this.loadingData = false;
  }
//=====================================================Trend Chart================================================= 
 public TrendChart(): void {
    this.progressTracking = {      
        "chart": {
          "type": "line",
          "marginRight": 50,
          "zoomType": "xy",
          "panning": true,
          "panKey": "shift"        },
        "title": {
          "text": ""        },
        "credits": {
          "enabled": false        },
        "yAxis": {
          "lineColor": "#000000",
          "lineWidth": 0.2,
          "title": {
            "text": "Viscosity",
            "style": {
              "fontFamily": "Roboto",
              "fontWeight": "bold",
              "fontsize": "16px"            }
          },
          "alignTicks": true,
          "visible": true,
          "softMin": 6819.75,
          "softMax": 11731.43,
          "plotLines": [
            {
              "value": 9275.59,
              "color": "#A1DDDC",
              "dashStyle": "Solid",
              "width": 2,
              "label": {
                "text": "Mean 9275.59",
                "style": {
                  "fontsize": "16px",
                  "fontFamily": "Roboto",
                  "fontWeight": "bold"                }
              }
            },
            {
              "value": 11117.47,
              "color": "#FFD639",
              "dashStyle": "Solid",
              "width": 2,
              "label": {
                "text": "UCL 11117.47",
                "style": {
                  "fontsize": "16px",
                  "fontFamily": "Roboto",
                  "fontWeight": "bold"                }
              }
            },
            {
              "value": 7433.71,
              "color": "#FFD639",
              "dashStyle": "Solid",
              "width": 2,
              "label": {
                "text": "LCL 7433.71",
                "style": {
                  "fontsize": "16px",
                  "fontFamily": "Roboto",
                  "fontWeight": "bold"                }
              }
            },
            {
              "value": 9700,
              "color": "#FFA500",
              "dashStyle": "Solid",
              "width": 2,
              "label": {
                "text": "GoldenBatch 9700.0"              }
            },
            {
              "value": null,
              "color": "#FFD700",
              "dashStyle": "Solid",
              "width": 2,
              "label": {
                "text": "Target",
                "style": {
                  "fontsize": "16px",
                  "fontFamily": "Roboto",
                  "fontWeight": "bold"                }
              }
            }
          ]
        },
        "tooltip": {
          "pointFormat": "Batches: <b>{point.y}</b><br>{point.custom.extraInformation}"        },
        "series": [
          {
            "name": "Batches",
            "data": [
              {
                "y": 9709,
                "name": "0006691174",
                "color": ""              },
              {
                "y": 9635,
                "name": "0006691202",
                "color": ""              },
              {
                "y": 9034,
                "name": "0006691196",
                "color": ""              },
              {
                "y": 10753,
                "name": "0006691173",
                "color": ""              },
              {
                "y": 9008,
                "name": "0006691194",
                "color": ""              },
              {
                "y": 8518,
                "name": "0006691101",
                "color": ""              },
              {
                "y": 9848,
                "name": "0006691203",
                "color": ""              },
              {
                "y": 9325,
                "name": "0006691197",
                "color": ""              },
              {
                "y": 8792,
                "name": "0006691176",
                "color": ""              },
              {
                "y": 8856,
                "name": "0006691185",
                "color": ""              },
              {
                "y": 9398,
                "name": "0006691175",
                "color": ""              },
              {
                "y": 8810,
                "name": "0006691180",
                "color": ""              },
              {
                "y": 8523,
                "name": "0006691179",
                "color": ""              },
              {
                "y": 9135,
                "name": "0006691177",
                "color": ""              },
              {
                "y": 8776,
                "name": "0006691182",
                "color": ""              },
              {
                "y": 8526,
                "name": "0006691178",
                "color": ""              },
              {
                "y": 8943,
                "name": "0006691183",
                "color": ""              },
              {
                "y": 10291,
                "name": "0006691199",
                "color": ""              },
              {
                "y": 9076,
                "name": "0006691198",
                "color": ""              },
              {
                "y": 10016,
                "name": "0006691201",
                "color": ""              },
              {
                "y": 9062,
                "name": "0006691184",
                "color": ""              },
              {
                "y": 10029,
                "name": "0006691200",
                "color": ""              }
            ],
            "tooltip": {
              "valueDecimals": 2            }
          }
        ],
        "plotOptions": {
          "series": {
            "pointPlacement": "on"          }
        },
        "xAxis": {
          "plotLines": [
            {
              "color": "#0096FF",
              "width": 2,
              "value": 8,
              "dashStyle": "Solid",
              "label": {
                "text": "Current Batch"              }
            }
          ],
          "lineColor": "#000000",
          "lineWidth": 0.1,
          "categories": [
            "     09/28/2021 03:38:AM<br/>0006691174",
            "0006691202",
            "0006691196",
            "0006691173",
            "0006691194",
            "0006691101",
            "0006691203",
            "0006691197",
            "0006691176",
            "0006691185",
            "0006691175",
            "0006691180",
            "0006691179",
            "0006691177",
            "0006691182",
            "0006691178",
            "0006691183",
            "0006691199",
            "0006691198",
            "0006691201",
            "0006691184",
            "0006691200<br/>     01/08/2022 03:11:AM"          ],
          "labels": {
            "rotation": -60          }
        }
      }    
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