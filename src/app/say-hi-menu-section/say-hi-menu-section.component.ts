import { Component, OnInit } from '@angular/core';
import { MenuSectionFooterComponent } from '../menu-section-footer/menu-section-footer.component';
import { LanguageServiceComponent } from '../shared/language-service/language-service.component';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-say-hi-menu-section',
  standalone: true,
  imports: [MenuSectionFooterComponent, CommonModule],
  templateUrl: './say-hi-menu-section.component.html',
  styleUrl: './say-hi-menu-section.component.scss'
})
export class SayHiMenuSectionComponent implements OnInit {
  language: string = '';
  languageSubscription: Subscription | undefined;

  constructor(private languageService: LanguageServiceComponent) { }

  ngOnInit() {
    this.languageSubscription = this.languageService.language$.subscribe(language => {
      this.language = language;
    });
  }

  ngOnDestroy() {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }

  changeLanguage() {
    this.language = this.language === 'en' ? 'de' : 'en';
    this.languageService.setLanguage(this.language);
  }
}

