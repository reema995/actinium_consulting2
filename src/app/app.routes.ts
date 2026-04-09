import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Actinium Consulting | Home',
    loadComponent: () =>
      import('./pages/home-page/home-page.component').then((module) => module.HomePageComponent)
  },
  {
    path: 'services',
    title: 'Actinium Consulting | Services',
    loadComponent: () =>
      import('./pages/services-page/services-page.component').then((module) => module.ServicesPageComponent)
  },
  {
    path: 'about',
    title: 'Actinium Consulting | About',
    loadComponent: () =>
      import('./pages/about-page/about-page.component').then((module) => module.AboutPageComponent)
  },
  {
    path: 'contact',
    title: 'Actinium Consulting | Contact',
    loadComponent: () =>
      import('./pages/contact-page/contact-page.component').then((module) => module.ContactPageComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
