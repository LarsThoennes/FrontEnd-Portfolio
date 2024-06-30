import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService } from '../../../../language.service';

@Component({
  selector: 'app-portfolio-project-1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio-project-1.component.html',
  styleUrl: './portfolio-project-1.component.scss'
})
export class PortfolioProject1Component {

  language: string = 'en';

  constructor(private languageService: LanguageService) {}

  ngOnInit() {
    this.languageService.language$.subscribe(lang => (this.language = lang));
  }


  openJoinGithubURL() {
    let pageURL = 'https://github.com/MaxWirnsberger/Join';
    window.open(pageURL, '_blank');
}


  openJoinLiveTestURL() {
    let pageURL = 'https://join.lars-thoennes.de/html/index.html';
    window.open(pageURL, '_blank');
  }
}


