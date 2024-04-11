import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService } from '../../../../language.service';

@Component({
  selector: 'app-portfolio-project-3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio-project-3.component.html',
  styleUrl: './portfolio-project-3.component.scss'
})
export class PortfolioProject3Component {
  language: string = 'en';

  constructor(private languageService: LanguageService) {}

  ngOnInit() {
    this.languageService.language$.subscribe(lang => (this.language = lang));
  }

  openPokedexGithubURL() {
    let pageURL = 'https://github.com/LarsThoennes/Pokedex';
    window.open(pageURL, '_blank');
  }

  openPokedexLiveTestURL() {
    let pageURL = 'https://lars-thoennes.de/Pokedex/';
    window.open(pageURL, '_blank');
  }
}
