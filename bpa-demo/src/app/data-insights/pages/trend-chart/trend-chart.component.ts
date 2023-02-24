import { Component, OnInit } from '@angular/core';
import * as Highcharts from "highcharts";

@Component({
  selector: 'app-trend-chart',
  templateUrl: './trend-chart.component.html',
  styleUrls: ['./trend-chart.component.scss']
})
export class TrendChartComponent {
  public loadingData: boolean = true;
  public dateProduction: Date = new Date();
  public updateFlag: boolean = true;
  public oneToOneFlag: boolean = true;
  public Highcharts: any = Highcharts;
  public chartConstructor: string = "chart";
  public progressTracking: any;
  constructor() {
  }
  public ngOnInit(): void {
    this.loadingData = false;
    this.TrendChart();
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
public chartCallback(): void {
  this.loadingData = false;
}
}
