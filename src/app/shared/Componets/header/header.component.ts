import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MenuSectionComponent } from './menu-section/menu-section.component';
import { LanguageService } from '../../../language.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenuSectionComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})


export class HeaderComponent {
  showMenu: boolean = false;
  language: string;

  constructor(private languageService: LanguageService) {
    this.language = this.languageService.getCurrentLanguage();
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
    const button = document.querySelector('#button')!;
    const body = document.querySelector('body')!;
    if(this.showMenu) {
      button.classList.remove('burger-menu-icon')
      button.classList.add('burger-menu-icon-toggle');
      body.classList.add('overflow-hidden');
    } else {
      button.classList.add('burger-menu-icon')
      button.classList.remove('burger-menu-icon-toggle');
      body.classList.remove('overflow-hidden');
    }
  }

  changeLanguage(lang: string): void {
    this.languageService.setCurrentLanguage(lang);
    this.language = lang;
  }
}
