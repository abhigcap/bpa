import { Component } from '@angular/core';

@Component({
  selector: 'app-site-metric-tab',
  templateUrl: './site-metric-tab.component.html',
  styleUrls: ['./site-metric-tab.component.scss']
})
export class SiteMetricTabComponent {
  public tabList = [
    { tabName: "Batch Performance Index"},
    { tabName: "Quality"},
    { tabName: "Cycle Time"},
    { tabName: "RM Dosing Accuracy"},
    { tabName: "Yield"}

  ];
  public selectedTab = 'Batch Performance Index';

  public selectTab(tabName: string) {
    this.selectedTab = tabName;
  }

}
