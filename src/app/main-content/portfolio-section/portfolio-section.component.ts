import { Component } from '@angular/core';
import { PortfolioProjectsSectionComponent } from './portfolio-projects-section/portfolio-projects-section.component';

@Component({
  selector: 'app-portfolio-section',
  standalone: true,
  imports: [PortfolioProjectsSectionComponent],
  templateUrl: './portfolio-section.component.html',
  styleUrl: './portfolio-section.component.scss'
})
export class PortfolioSectionComponent {

}
