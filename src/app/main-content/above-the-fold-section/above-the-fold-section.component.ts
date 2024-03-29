import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-above-the-fold-section',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './above-the-fold-section.component.html',
  styleUrl: './above-the-fold-section.component.scss'
})
export class AboveTheFoldSectionComponent {
  @Input() linkTarget: string = '';
}
