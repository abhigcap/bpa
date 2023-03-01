import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent {
  
  @Input() navbarDetails = {
    navbarTabList : [
      { tabName: "Enterprise"},
      { tabName: "Site"},
      { tabName: "Compare"},
      { tabName: "Correlation"},
      { tabName: "Events"},
      { tabName: "Settings"}
    ],
    selectedTab: 'Site'
  }; 

  onSelectTab(tabName: string) {
    this.navbarDetails.selectedTab = tabName;
  }
}
