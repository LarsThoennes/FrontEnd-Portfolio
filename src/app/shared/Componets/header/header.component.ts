import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MenuSectionComponent } from './menu-section/menu-section.component';
import { LanguageServiceComponent } from '../../language-service/language-service.component';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenuSectionComponent, CommonModule, LanguageServiceComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  showMenu = false;
  language: string = 'en';

  constructor(private languageService: LanguageServiceComponent) { }

  changeLanguage() {
    this.language = this.language === 'en' ? 'de' : 'en';
    this.languageService.setLanguage(this.language);
  }

  ngOnInit() { }

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
}

