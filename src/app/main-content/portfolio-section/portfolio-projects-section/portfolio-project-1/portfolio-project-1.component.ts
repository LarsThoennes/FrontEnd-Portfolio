import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageServiceComponent } from '../../../../shared/language-service/language-service.component';

@Component({
  selector: 'app-portfolio-project-1',
  standalone: true,
  imports: [CommonModule, LanguageServiceComponent],
  templateUrl: './portfolio-project-1.component.html',
  styleUrl: './portfolio-project-1.component.scss'
})
export class PortfolioProject1Component {

  language: string = 'en';

  constructor(private languageService: LanguageServiceComponent) {}

  ngOnInit() {
    this.languageService.language$.subscribe(lang => (this.language = lang));
  }


  openJoinGithubURL() {
    let pageURL = 'https://github.com/MaxWirnsberger/Join';
    window.location.href = pageURL;
  }

  openJoinLiveTestURL() {
    let pageURL = 'https://xn--lars-thnnes-xfb.de/Join/html/index.html';
    window.location.href = pageURL;
  }
}
