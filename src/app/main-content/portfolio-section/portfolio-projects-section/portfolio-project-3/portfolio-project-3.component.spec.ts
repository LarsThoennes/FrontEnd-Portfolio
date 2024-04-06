import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioProject3Component } from './portfolio-project-3.component';

describe('PortfolioProject3Component', () => {
  let component: PortfolioProject3Component;
  let fixture: ComponentFixture<PortfolioProject3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioProject3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortfolioProject3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
