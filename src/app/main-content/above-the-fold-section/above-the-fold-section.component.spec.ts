import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboveTheFoldSectionComponent } from './above-the-fold-section.component';

describe('AboveTheFoldSectionComponent', () => {
  let component: AboveTheFoldSectionComponent;
  let fixture: ComponentFixture<AboveTheFoldSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboveTheFoldSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboveTheFoldSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
