
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageServiceComponent } from '../shared/language-service/language-service.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-menu-section-footer',
  standalone: true,
  imports: [CommonModule, LanguageServiceComponent, RouterModule],
  templateUrl: './menu-section-footer.component.html',
  styleUrl: './menu-section-footer.component.scss'
})
export class MenuSectionFooterComponent {
  language: string = 'en';

  constructor(private languageService: LanguageServiceComponent) { }

  changeLanguage() {
    this.language = this.language === 'en' ? 'de' : 'en';
    this.languageService.setLanguage(this.language);
  }

  ngOnInit(): void { }
}
