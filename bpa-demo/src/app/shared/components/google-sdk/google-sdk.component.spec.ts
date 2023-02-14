import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleSdkComponent } from './google-sdk.component';

describe('GoogleSdkComponent', () => {
  let component: GoogleSdkComponent;
  let fixture: ComponentFixture<GoogleSdkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleSdkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoogleSdkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
