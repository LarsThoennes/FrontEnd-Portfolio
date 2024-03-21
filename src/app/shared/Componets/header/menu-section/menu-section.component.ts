import { SayHiMenuSectionComponent } from '../../../../say-hi-menu-section/say-hi-menu-section.component';
import { Component, Input ,OnInit,  Output, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterSectionComponent } from '../../footer-section/footer-section.component';
import { CommonModule } from '@angular/common';
import { MenuSectionFooterComponent } from '../../../../menu-section-footer/menu-section-footer.component';

@Component({
  selector: 'app-menu-section',
  standalone: true,
  imports: [SayHiMenuSectionComponent, RouterModule, FooterSectionComponent, CommonModule , MenuSectionFooterComponent],
  templateUrl: './menu-section.component.html',
  styleUrl: './menu-section.component.scss'
})
export class MenuSectionComponent implements OnInit {
  @Output() menuToggled: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onMenuClick(): void {
    this.menuToggled.emit();
  }
}

