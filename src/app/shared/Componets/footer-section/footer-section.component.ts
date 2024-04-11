import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../../language.service';


@Component({
  selector: 'app-footer-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer-section.component.html',
  styleUrl: './footer-section.component.scss'
})
export class FooterSectionComponent {
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
