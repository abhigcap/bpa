import { Component, AfterViewInit, ViewChild, ElementRef, Input } from 
  '@angular/core';
import { CenterControl } from '../../services/google-sdk/center-control';
import { MapsSearchBar } from '../../services/google-sdk/maps-search-bar';

@Component({
  selector: 'app-google-sdk',
  templateUrl: './google-sdk.component.html',
  styleUrls: ['./google-sdk.component.scss']
})
export class GoogleSdkComponent implements AfterViewInit {

  @ViewChild('mapContainer', {static: false}) gmap!: ElementRef;
  @Input('map-markers') markers:any = [];
  @Input('height') height:any = "100vh";
  @Input('width') width:any = "100%";
  @Input('show-map-overlap') isMapOverlap: boolean = false;

  map!: google.maps.Map;
  mapOptions: google.maps.MapOptions = {
    zoom: 2.0,
    center: new google.maps.LatLng(20.8003406, -19.99593),
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DEFAULT,
      position: google.maps.ControlPosition.TOP_LEFT,
    },
    zoomControl: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.RIGHT_BOTTOM,
    },
    scaleControl: true,
    streetViewControl: true,
    streetViewControlOptions: {
      position: google.maps.ControlPosition.RIGHT_BOTTOM,
    },
    gestureHandling: "cooperative"
  };

  ngAfterViewInit() {
    this.mapInitializer();
  }

  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement, 
    this.mapOptions);
    for(let marker of this.markers)
    {
      let markerOptions = {...marker, map: this.map, visible: true};
      let mrk = new google.maps.Marker(markerOptions);
      mrk.setMap(this.map);
    }
  
    const centerControlDiv = document.createElement("div");
    const center = new google.maps.LatLng(20.8003406, -19.99593);
    const control = new CenterControl(centerControlDiv, this.map, center, this.mapOptions.zoom ?? 1.8);

    // @ts-ignore
    centerControlDiv.index = 1;
    centerControlDiv.style.paddingTop = "2px";
    centerControlDiv.style.paddingLeft = "8%";
    centerControlDiv.style.height = "25px"
    this.map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);

    const postControlBtnSpacer = document.createElement("div");
    // @ts-ignore
    postControlBtnSpacer.index = 1;
    postControlBtnSpacer.style.minWidth = "6%";
    postControlBtnSpacer.style.paddingTop = "2px";
    postControlBtnSpacer.style.height = "25px"
    this.map.controls[google.maps.ControlPosition.TOP_CENTER].push(postControlBtnSpacer);

    const searhcBarDiv = document.createElement("div");
    const searchBar = new MapsSearchBar(searhcBarDiv, this.map);

    // @ts-ignore
    searhcBarDiv.index = 1;
    searhcBarDiv.style.paddingTop = "2px";
    searhcBarDiv.style.height = "25px"
    this.map.controls[google.maps.ControlPosition.TOP_CENTER].push(searhcBarDiv);
   }
}

