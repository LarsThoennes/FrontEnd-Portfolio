import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SayHiMenuSectionComponent } from './say-hi-menu-section.component';

describe('SayHiMenuSectionComponent', () => {
  let component: SayHiMenuSectionComponent;
  let fixture: ComponentFixture<SayHiMenuSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SayHiMenuSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SayHiMenuSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
