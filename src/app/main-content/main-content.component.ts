import { Component } from '@angular/core';
import { AboveTheFoldSectionComponent } from './above-the-fold-section/above-the-fold-section.component';
import { AboutMeSectionComponent } from './about-me-section/about-me-section.component';
import { NextSectionArrowRightComponent } from './next-section-arrow-right/next-section-arrow-right.component';
import { NextSectionArrowLeftComponent } from './next-section-arrow-left/next-section-arrow-left.component';
import { PortfolioSectionComponent } from './portfolio-section/portfolio-section.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { SayHiSectionComponent } from './say-hi-section/say-hi-section.component';
import { EmailSectionComponent } from './email-section/email-section.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [AboveTheFoldSectionComponent, AboutMeSectionComponent, NextSectionArrowRightComponent,
    PortfolioSectionComponent, NextSectionArrowLeftComponent, MySkillsComponent, SayHiSectionComponent,
    EmailSectionComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
