import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSectionFooterComponent } from './menu-section-footer.component';

describe('MenuSectionFooterComponent', () => {
  let component: MenuSectionFooterComponent;
  let fixture: ComponentFixture<MenuSectionFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuSectionFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuSectionFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
