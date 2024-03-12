import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio-project-1',
  standalone: true,
  imports: [],
  templateUrl: './portfolio-project-1.component.html',
  styleUrl: './portfolio-project-1.component.scss'
})
export class PortfolioProject1Component {


  openJoinGithubURL() {
    let pageURL = 'https://github.com/MaxWirnsberger/Join';
    window.location.href = pageURL;
  }

  openJoinLiveTestURL() {
    let pageURL = 'https://xn--lars-thnnes-xfb.de/Join/html/index.html';
    window.location.href = pageURL;
  }


}
