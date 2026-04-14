import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home-page/home-page.component').then((module) => module.HomePageComponent)
  },
  {
    path: 'services',
    loadComponent: () =>
      import('./pages/services-page/services-page.component').then((module) => module.ServicesPageComponent)
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about-page/about-page.component').then((module) => module.AboutPageComponent)
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact-page/contact-page.component').then((module) => module.ContactPageComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
