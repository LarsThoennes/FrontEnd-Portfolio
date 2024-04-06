import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-above-the-fold-section',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './above-the-fold-section.component.html',
  styleUrl: './above-the-fold-section.component.scss'
})
export class AboveTheFoldSectionComponent {
  @Input() linkTarget: string = '';

  language: string = 'en';

  constructor(private languageService: LanguageService) {}

  ngOnInit() {
    this.languageService.language$.subscribe(lang => (this.language = lang));
  }
}
