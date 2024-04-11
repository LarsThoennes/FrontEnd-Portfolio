import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService } from '../../../../language.service';

@Component({
  selector: 'app-portfolio-project-2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio-project-2.component.html',
  styleUrl: './portfolio-project-2.component.scss'
})
export class PortfolioProject2Component {

  language: string = 'en';

  constructor(private languageService: LanguageService) {}

  ngOnInit() {
    this.languageService.language$.subscribe(lang => (this.language = lang));
  }

  openPolloLocoGithubURL() {
    let pageURL = 'https://github.com/LarsThoennes/El-pollo-loco';
    window.open(pageURL, '_blank');
  }

  openPolloLocoLiveTestURL() {
    let pageURL = 'https://lars-thoennes.de/El%20Pollo%20Loco/';
    window.open(pageURL, '_blank');
  }
}
