import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchPerformanceListComponent } from './batch-performance-list.component';

describe('BatchPerformanceListComponent', () => {
  let component: BatchPerformanceListComponent;
  let fixture: ComponentFixture<BatchPerformanceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatchPerformanceListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatchPerformanceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
