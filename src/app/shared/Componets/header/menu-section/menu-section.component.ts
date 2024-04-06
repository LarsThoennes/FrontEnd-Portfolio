import { SayHiMenuSectionComponent } from '../../../../say-hi-menu-section/say-hi-menu-section.component';
import { Component ,OnInit,  Output, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-menu-section',
  standalone: true,
  imports: [SayHiMenuSectionComponent, RouterModule, CommonModule],
  templateUrl: './menu-section.component.html',
  styleUrl: './menu-section.component.scss'
})
export class MenuSectionComponent implements OnInit {
  @Output() menuToggled: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onMenuClick(): void {
    this.menuToggled.emit();
  }
}

