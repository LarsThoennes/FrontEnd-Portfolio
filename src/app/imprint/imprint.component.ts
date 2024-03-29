import { Component } from '@angular/core';
import { MenuSectionFooterComponent } from '../menu-section-footer/menu-section-footer.component';
import { CommonModule } from '@angular/common';
import { LanguageServiceComponent } from '../shared/language-service/language-service.component';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [MenuSectionFooterComponent, CommonModule],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {
  language: string = 'en';

  constructor(private languageService: LanguageServiceComponent) {}

  ngOnInit() {
    this.languageService.language$.subscribe(lang => (this.language = lang));
  }
}
