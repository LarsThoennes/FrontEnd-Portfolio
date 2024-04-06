import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguageSubject: BehaviorSubject<string> = new BehaviorSubject<string>('de');
  public language$ = this.currentLanguageSubject.asObservable();

  constructor() {}

  getCurrentLanguage(): string {
    return this.currentLanguageSubject.getValue();
  }

  setCurrentLanguage(language: string): void {
    this.currentLanguageSubject.next(language);
  }
}
