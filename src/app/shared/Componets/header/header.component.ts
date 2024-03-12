import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() { }



  toggleMenu() {
    const button = document.querySelector('#button')!;
    button.classList.remove('burger-menu-icon');
    button.classList.add('burger-menu-icon-toggle');

}
}
