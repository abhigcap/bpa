import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() headerDetails = {
    organization: {
      name: 'ROCKWELL AUTOMATION INDUSTRY SOLUTIONS',
      productTitle: 'Batch Performance Analytics'
    },
    user: {
      name: 'John',
      imageUrl: null
    },
    site: {
      name: 'Bayer Houston'
    }
  };

  productTitlePart1: string = '';
  productTitlePart2: string = '';

  onBtnClick() {
    console.log('On Button click!')
  }

  ngOnInit(): void {
    const productTitleStrList: Array<string> = this.headerDetails.organization.productTitle.split(' ');
    
    if(productTitleStrList.length > 1) {
      this.productTitlePart1 = productTitleStrList.slice(0, -1).join(' ');
      this.productTitlePart2 = productTitleStrList.slice(productTitleStrList.length -1, productTitleStrList.length).join(' ');
    }
    else { 
      this.productTitlePart1 = this.headerDetails.organization.productTitle;
    }
  }
}
