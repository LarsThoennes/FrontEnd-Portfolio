import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-language-service',
  standalone: true,
  imports: [],
  templateUrl: './language-service.component.html',
  styleUrl: './language-service.component.scss'
})
@Injectable({
  providedIn: 'root'
})
export class LanguageServiceComponent {
  private currentLanguage = new BehaviorSubject<string>('de');

  language$: Observable<string> = this.currentLanguage.asObservable();


  setLanguage(language: string) {
    this.currentLanguage.next(language);
  }
}
