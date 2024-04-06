import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuSectionFooterComponent } from '../menu-section-footer/menu-section-footer.component';

@Component({
  selector: 'app-say-hi-menu-section',
  standalone: true,
  imports: [CommonModule, MenuSectionFooterComponent],
  templateUrl: './say-hi-menu-section.component.html',
  styleUrl: './say-hi-menu-section.component.scss'
})
export class SayHiMenuSectionComponent  {

}

