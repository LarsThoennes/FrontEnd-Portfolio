import { Component } from '@angular/core';
import { PortfolioProject1Component } from './portfolio-project-1/portfolio-project-1.component';
import { PortfolioProject2Component } from './portfolio-project-2/portfolio-project-2.component';
import { PortfolioProject3Component } from './portfolio-project-3/portfolio-project-3.component';

@Component({
  selector: 'app-portfolio-projects-section',
  standalone: true,
  imports: [PortfolioProject1Component, PortfolioProject2Component, PortfolioProject3Component],
  templateUrl: './portfolio-projects-section.component.html',
  styleUrl: './portfolio-projects-section.component.scss'
})
export class PortfolioProjectsSectionComponent {

}
