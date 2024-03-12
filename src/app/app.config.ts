import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import * as AOS from 'aos';

export const initAOS = () => {
  AOS.init();
};

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),provideHttpClient()]
};
