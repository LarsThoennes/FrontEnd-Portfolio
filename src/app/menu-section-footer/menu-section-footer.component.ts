import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../language.service';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-menu-section-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu-section-footer.component.html',
  styleUrl: './menu-section-footer.component.scss'
})

export class MenuSectionFooterComponent {
  language: string;

  constructor(private languageService: LanguageService) {
    this.language = this.languageService.getCurrentLanguage();
  }

  changeLanguage(lang: string): void {
    this.languageService.setCurrentLanguage(lang);
    this.language = lang;
  }
openGithubProfile() {
  let pageURL = 'https://github.com/LarsThoennes';
  window.open(pageURL, '_blank');
}

openLinkedinProfile() {
  let pageURL = 'https://www.linkedin.com/in/lars-th%C3%B6nnes/';
  window.open(pageURL, '_blank');
}
}
