import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'bpa-demo';
  markers: any = [];

  ngOnInit() {
    this.generateMarkers();
  }

  generateMarkers() {
    for(let i=0;i<500;i++){
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
