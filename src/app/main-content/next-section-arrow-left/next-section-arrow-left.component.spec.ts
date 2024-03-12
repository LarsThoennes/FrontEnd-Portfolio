import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextSectionArrowLeftComponent } from './next-section-arrow-left.component';

describe('NextSectionArrowLeftComponent', () => {
  let component: NextSectionArrowLeftComponent;
  let fixture: ComponentFixture<NextSectionArrowLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NextSectionArrowLeftComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NextSectionArrowLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
