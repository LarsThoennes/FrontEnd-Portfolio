import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-next-section-arrow-right',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './next-section-arrow-right.component.html',
  styleUrl: './next-section-arrow-right.component.scss'
})
export class NextSectionArrowRightComponent {
  @Input() linkTarget: string = '';
}
