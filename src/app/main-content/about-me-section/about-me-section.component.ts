import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LanguageServiceComponent } from '../../shared/language-service/language-service.component';

@Component({
  selector: 'app-about-me-section',
  standalone: true,
  imports: [RouterModule, CommonModule, LanguageServiceComponent],
  templateUrl: './about-me-section.component.html',
  styleUrl: './about-me-section.component.scss'
})
export class AboutMeSectionComponent {
  @Input() linkTarget: string = '';

  language: string = 'en';

  constructor(private languageService: LanguageServiceComponent) {}

  ngOnInit() {
    this.languageService.language$.subscribe(lang => (this.language = lang));
  }
}
