import { Component } from '@angular/core';
import { PortfolioProjectsSectionComponent } from './portfolio-projects-section/portfolio-projects-section.component';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-portfolio-section',
  standalone: true,
  imports: [PortfolioProjectsSectionComponent, CommonModule],
  templateUrl: './portfolio-section.component.html',
  styleUrl: './portfolio-section.component.scss'
})
export class PortfolioSectionComponent {
  language: string = 'en';

  constructor(private languageService: LanguageService) {}

  ngOnInit() {
    this.languageService.language$.subscribe(lang => (this.language = lang));
  }
}
