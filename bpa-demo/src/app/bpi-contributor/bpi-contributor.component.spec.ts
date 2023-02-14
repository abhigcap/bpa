import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BpiContributorComponent } from './bpi-contributor.component';

describe('BpiContributorComponent', () => {
  let component: BpiContributorComponent;
  let fixture: ComponentFixture<BpiContributorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BpiContributorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BpiContributorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
