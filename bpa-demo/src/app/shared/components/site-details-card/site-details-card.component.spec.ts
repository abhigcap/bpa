import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteDetailsCardComponent } from './site-details-card.component';

describe('SiteDetailsCardComponent', () => {
  let component: SiteDetailsCardComponent;
  let fixture: ComponentFixture<SiteDetailsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteDetailsCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
