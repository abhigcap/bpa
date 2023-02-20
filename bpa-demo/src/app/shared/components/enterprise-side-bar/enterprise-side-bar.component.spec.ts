import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseSideBarComponent } from './enterprise-side-bar.component';

describe('EnterpriseSideBarComponent', () => {
  let component: EnterpriseSideBarComponent;
  let fixture: ComponentFixture<EnterpriseSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterpriseSideBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnterpriseSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
