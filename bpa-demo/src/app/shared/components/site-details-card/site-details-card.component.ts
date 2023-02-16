import { Component, Input } from '@angular/core';
import { SiteDetails } from '../../interface/site-details';

@Component({
  selector: 'app-site-details-card',
  templateUrl: './site-details-card.component.html',
  styleUrls: ['./site-details-card.component.scss']
})
export class SiteDetailsCardComponent {
  @Input('site-details') SiteDetails!: SiteDetails;

}
