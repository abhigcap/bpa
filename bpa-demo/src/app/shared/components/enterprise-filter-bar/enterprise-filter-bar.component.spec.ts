import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseFilterBarComponent } from './enterprise-filter-bar.component';

describe('EnterpriseFilterBarComponent', () => {
  let component: EnterpriseFilterBarComponent;
  let fixture: ComponentFixture<EnterpriseFilterBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterpriseFilterBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnterpriseFilterBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
