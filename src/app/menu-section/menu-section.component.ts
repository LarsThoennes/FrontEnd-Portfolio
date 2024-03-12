import { SayHiMenuSectionComponent } from '../say-hi-menu-section/say-hi-menu-section.component';
import { Component, Input ,OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterSectionComponent } from '../shared/Componets/footer-section/footer-section.component';
import { CommonModule } from '@angular/common';
import { MenuSectionFooterComponent } from '../menu-section-footer/menu-section-footer.component';

@Component({
  selector: 'app-menu-section',
  standalone: true,
  imports: [SayHiMenuSectionComponent, RouterModule, FooterSectionComponent, CommonModule , MenuSectionFooterComponent],
  templateUrl: './menu-section.component.html',
  styleUrl: './menu-section.component.scss'
})
export class MenuSectionComponent implements OnInit {
  @Input() linkTarget: string = '';

  constructor() { }

  ngOnInit() {

  }

  openAboutMe() {
    // console.log('hallo');
    // let headerToggleButton = new HeaderComponent();
    // headerToggleButton.toggleMenu();
    }

  }

