import { Routes } from '@angular/router';
import { MySkillsComponent } from './main-content/my-skills/my-skills.component';
import { SayHiSectionComponent } from './main-content/say-hi-section/say-hi-section.component';
import { PortfolioSectionComponent } from './main-content/portfolio-section/portfolio-section.component';
import { EmailSectionComponent } from './main-content/email-section/email-section.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { MainContentComponent } from './main-content/main-content.component';
import { ImprintComponent } from './imprint/imprint.component';
import { MenuSectionComponent } from './shared/Componets/header/menu-section/menu-section.component';

export const routes: Routes = [
  { path: '', component: MainContentComponent },
  { path: 'legalNotice', component: LegalNoticeComponent },
  { path: 'imprint', component: ImprintComponent },

];
