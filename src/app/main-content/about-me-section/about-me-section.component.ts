import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-about-me-section',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './about-me-section.component.html',
  styleUrl: './about-me-section.component.scss'
})
export class AboutMeSectionComponent {
  @Input() linkTarget: string = '';
  language: string = 'en';
  constructor(private languageService: LanguageService) {
    this.languageService.language$.subscribe(lang => (this.language = lang));
  }
}
