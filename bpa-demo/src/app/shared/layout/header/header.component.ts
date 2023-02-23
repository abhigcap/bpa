import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
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
