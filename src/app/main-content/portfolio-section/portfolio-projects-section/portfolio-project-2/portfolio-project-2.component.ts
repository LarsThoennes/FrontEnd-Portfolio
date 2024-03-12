import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio-project-2',
  standalone: true,
  imports: [],
  templateUrl: './portfolio-project-2.component.html',
  styleUrl: './portfolio-project-2.component.scss'
})
export class PortfolioProject2Component {
  openPolloLocoGithubURL() {
    let pageURL = 'https://github.com/LarsThoennes/El-pollo-loco';
    window.location.href = pageURL;
  }

  openPolloLocoLiveTestURL() {
    let pageURL = 'https://xn--lars-thnnes-xfb.de/El%20Pollo%20Loco/';
    window.location.href = pageURL;
  }
}
