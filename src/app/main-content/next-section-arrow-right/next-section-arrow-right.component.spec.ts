import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextSectionArrowRightComponent } from './next-section-arrow-right.component';

describe('NextSectionArrowRightComponent', () => {
  let component: NextSectionArrowRightComponent;
  let fixture: ComponentFixture<NextSectionArrowRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NextSectionArrowRightComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NextSectionArrowRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
