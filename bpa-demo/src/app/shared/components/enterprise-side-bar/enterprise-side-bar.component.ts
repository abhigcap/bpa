import { Component, Input, OnInit } from '@angular/core';
import { SiteDetails } from '../../interface/site-details';
import { SearchSitePipe } from '../../pipes/search-site.pipe';
import { SortOrder } from '../../pipes/sort.pipe';

@Component({
  selector: 'app-enterprise-side-bar',
  templateUrl: './enterprise-side-bar.component.html',
  styleUrls: ['./enterprise-side-bar.component.scss']
})
export class EnterpriseSideBarComponent {
  @Input('site-details') siteDetails: Array<SiteDetails> = [];
  markers: any = [];
  searchStr: any = '';
  sortOrder: SortOrder = 'unsorted';
  searchSitePipe!: SearchSitePipe;

  onSearchSite(searchString: any){
    this.searchStr = searchString;
  }

  onSort() {
    if(this.sortOrder === 'unsorted') {
      this.sortOrder = 'asc';
    }
    else if(this.sortOrder === 'asc') {
      this.sortOrder = 'desc';
    } else {
      this.sortOrder = 'unsorted';
    }
  }

  onSearchRemove(event: any) {
    if (event.key === "Backspace" || event.key === "Delete") {
        this.searchStr = (event.target as HTMLInputElement).value;
    }
  }
}
