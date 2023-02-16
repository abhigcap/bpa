import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteMetricTabComponent } from './site-metric-tab.component';

describe('SiteMetricTabComponent', () => {
  let component: SiteMetricTabComponent;
  let fixture: ComponentFixture<SiteMetricTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteMetricTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteMetricTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
