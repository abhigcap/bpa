import { Component, OnInit} from '@angular/core';
import { SiteDetails } from '../shared/interface/site-details';
import { NgModel } from '@angular/forms';
import { SortOrder } from '../shared/pipes/sort.pipe';
import { SearchSitePipe } from '../shared/pipes/search-site.pipe';

@Component({
  selector: 'app-enterprise-dashboard',
  templateUrl: './enterprise-dashboard.component.html',
  styleUrls: ['./enterprise-dashboard.component.scss']
})
export class EnterpriseDashboardComponent implements OnInit {
  siteDetails: Array<SiteDetails> = [];
  markers: any = [];
  entrpiseExceptionBtn: boolean = false;

  constructor() {
  }

  ngOnInit() {
    this.generateMockSiteDetails();
    this.generateMarkers();
  }

  setExceptionBtnFlag(isExceptionBtn: boolean) { 
    this.entrpiseExceptionBtn =isExceptionBtn;
  }

  generateMockSiteDetails() {
    const siteNames = ['Bayer Corporate', 'New York', 'Texas', 'Chicago', 'Seatle', 'Boise', 'New Jersey', 'Tennesse', 'California', 'Massachusetts', 'Hawaii', 'Alaska', 'Florida'];
    this.siteDetails = [];
    for(let i=0;i<50;i++) {
      const item: SiteDetails = {
        name: siteNames[Math.floor(Math.random() * 13)], status:'QP1: Penicillin Yield is below LSL(12.26 < 15.0)', timeStamp:'08/16/2022, 04:00 AM'};
      if(!((this.siteDetails?.find(e=> e?.name === item.name)?.name?.length ?? 0) > 0)) {
        this.siteDetails = [...this.siteDetails, item ];
      }
    };
    console.log(this.siteDetails);
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
