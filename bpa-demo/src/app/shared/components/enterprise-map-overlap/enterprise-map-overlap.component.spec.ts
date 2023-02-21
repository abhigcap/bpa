import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseMapOverlapComponent } from './enterprise-map-overlap.component';

describe('EnterpriseMapOverlapComponent', () => {
  let component: EnterpriseMapOverlapComponent;
  let fixture: ComponentFixture<EnterpriseMapOverlapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterpriseMapOverlapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnterpriseMapOverlapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
