import { Component, HostBinding, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-enterprise-map-overlap',
  templateUrl: './enterprise-map-overlap.component.html',
  styleUrls: ['./enterprise-map-overlap.component.scss']
})
export class EnterpriseMapOverlapComponent implements OnInit, OnChanges {

  @Input('show-map-overlap') isMapOverlap: boolean = false;

  @HostBinding('style.display') 
  display = 'none';

  ngOnInit(): void {
   this.showOverlapDialog();
  }

  ngOnChanges(): void {
    this.showOverlapDialog();
  }

  showOverlapDialog() {
    if(this.isMapOverlap){
      this.display = 'block';
    } else {
      this.display = 'none';
    }
  }
}
