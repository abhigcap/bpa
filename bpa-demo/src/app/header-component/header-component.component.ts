import { Component } from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss']
})
export class HeaderComponentComponent {
  public tabList = [
    { tabName: "Enterprise"},
    { tabName: "Site"},
    { tabName: "Compare"},
    { tabName: "Correlation"},
    { tabName: "Events"},
    { tabName: "Settings"}

  ];
  public selectedTab = 'Site';

  public selectTab(tabName: string) {
    this.selectedTab = tabName;
  }

}
