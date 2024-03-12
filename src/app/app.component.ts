import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CommonModule } from '@angular/common';
import { initAOS } from './app.config';
import { MenuSectionComponent } from './menu-section/menu-section.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { HeaderComponent } from './shared/Componets/header/header.component';
import { FooterSectionComponent } from './shared/Componets/footer-section/footer-section.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterSectionComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
  ngOnInit() {
    initAOS();
  }
}
