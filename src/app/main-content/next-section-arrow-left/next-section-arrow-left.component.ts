import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-next-section-arrow-left',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './next-section-arrow-left.component.html',
  styleUrl: './next-section-arrow-left.component.scss'
})
export class NextSectionArrowLeftComponent {
  @Input() linkTarget: string = '';
}
