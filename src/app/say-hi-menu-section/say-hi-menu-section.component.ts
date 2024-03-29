import { Component, OnInit } from '@angular/core';
import { MenuSectionFooterComponent } from '../menu-section-footer/menu-section-footer.component';
import { LanguageServiceComponent } from '../shared/language-service/language-service.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-say-hi-menu-section',
  standalone: true,
  imports: [MenuSectionFooterComponent, CommonModule],
  templateUrl: './say-hi-menu-section.component.html',
  styleUrl: './say-hi-menu-section.component.scss'
})
export class SayHiMenuSectionComponent implements OnInit {
  language: string = 'en';

  constructor(private languageService: LanguageServiceComponent) { }

  changeLanguage() {
    const newLanguage = this.language === 'en' ? 'de' : 'en';
    this.languageService.setLanguage(newLanguage);
  }

  ngOnInit(): void {

  }
}

