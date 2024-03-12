import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {
  application_icons = ['Property 1=Angular.png','Property 1=Typescript.png',
  'Property 1=JavScript.png','Property 1=html.png','Property 1=css.png',
  'Property 1=Firebase.png','Property 1=Git.png','Property 1=Wordpress.png',
  'Property 1=Scrum.png','Property 1=Api.png','Property 1=Test Automation.png'];

  application_names = ['Angular','TypeScript','JavaScript','HTML','CSS','Firebase',
  'Git','Wordpress','Scrum','Rest-Api','Material design'];

  combinedData: { icon: string, name: string }[] = [];

ngOnInit() {
  for (let i = 0; i < this.application_icons.length; i++) {
    this.combinedData.push({ icon: this.application_icons[i], name: this.application_names[i] });
  }
}
}

