import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LanguageServiceComponent } from '../../shared/language-service/language-service.component';

@Component({
  selector: 'app-above-the-fold-section',
  standalone: true,
  imports: [RouterModule, CommonModule, LanguageServiceComponent],
  templateUrl: './above-the-fold-section.component.html',
  styleUrl: './above-the-fold-section.component.scss'
})
export class AboveTheFoldSectionComponent {
  @Input() linkTarget: string = '';

  language: string = 'en';

  constructor(private languageService: LanguageServiceComponent) {}

  ngOnInit() {
    this.languageService.language$.subscribe(lang => (this.language = lang));
  }
}
