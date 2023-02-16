import { Component, OnInit } from '@angular/core';
import { SiteDetails } from '../shared/interface/site-details';

@Component({
  selector: 'app-enterprise-dashboard',
  templateUrl: './enterprise-dashboard.component.html',
  styleUrls: ['./enterprise-dashboard.component.scss']
})
export class EnterpriseDashboardComponent implements OnInit {
  siteDetails: Array<SiteDetails> = [];
  markers: any = [];
  constructor() {
    this.generateMockSiteDetails();
    this.generateMarkers();
  }
  ngOnInit() {

  }

  generateMockSiteDetails() {
    for(let i=0;i<70;i++) {
      const item: SiteDetails = {
        name: 'Bayer Houston', status:'QP1: Penicillin Yield is below LSL(12.26 < 15.0)', timeStamp:'08/16/2022, 04:00 AM'};
      this.siteDetails = [...this.siteDetails, item ];
    }
  }

  generateMarkers() {
    for(let i=0;i<250;i++){
      let markerTemplate = {
        position:{
        lat: Math.floor(Math.random() * 80)  + ((Math.random() - 0.5) * 2) / 10,
        lng: Math.floor(Math.random() * 170) + ((Math.random() - 0.5) * 2) / 10,
      },
        options: {
          animation: google.maps.Animation.DROP,
          icon: this.getMarkerIcons(Math.floor(Math.random() * 4))
        }
      };
      this.markers.push(markerTemplate);
    }
  }

  getMarkerIcons = (iconId: number) =>{
      return { url: iconId === 0 ? "../../../assets/png/red-circle.png" : 
      (iconId === 1 ? "../../../assets/png/green-circle.png": 
      (iconId === 2 ? "../../../assets/png/blue-circle.png": "../../../assets/png/yellow-circle.png")), // url
      scaledSize: new google.maps.Size(12, 12), // scaled size
      origin: new google.maps.Point(0,0), // origin
      anchor: new google.maps.Point(0, 0) // anchor
      };
  }

}
