import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageServiceComponent } from '../../language-service/language-service.component';



@Component({
  selector: 'app-footer-section',
  standalone: true,
  imports: [CommonModule, LanguageServiceComponent],
  templateUrl: './footer-section.component.html',
  styleUrl: './footer-section.component.scss'
})
export class FooterSectionComponent {
  language: string = 'en';

  constructor(private languageService: LanguageServiceComponent) {}

  ngOnInit() {
    this.languageService.language$.subscribe(lang => (this.language = lang));
  }
}
