import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageServiceComponent } from '../../../../shared/language-service/language-service.component';

@Component({
  selector: 'app-portfolio-project-2',
  standalone: true,
  imports: [CommonModule, LanguageServiceComponent],
  templateUrl: './portfolio-project-2.component.html',
  styleUrl: './portfolio-project-2.component.scss'
})
export class PortfolioProject2Component {

  language: string = 'en';

  constructor(private languageService: LanguageServiceComponent) {}

  ngOnInit() {
    this.languageService.language$.subscribe(lang => (this.language = lang));
  }

  openPolloLocoGithubURL() {
    let pageURL = 'https://github.com/LarsThoennes/El-pollo-loco';
    window.location.href = pageURL;
  }

  openPolloLocoLiveTestURL() {
    let pageURL = 'https://xn--lars-thnnes-xfb.de/El%20Pollo%20Loco/';
    window.location.href = pageURL;
  }
}
