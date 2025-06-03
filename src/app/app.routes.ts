import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/hero/hero').then(m => m.Hero)
  },
  {
    path: 'about',
    loadComponent: () => import('./components/about/about').then(m => m.About)
  },
  {
    path: 'skills',
    loadComponent: () => import('./components/skills/skills').then(m => m.Skills)
  },
  {
    path: 'education',
    loadComponent: () => import('./components/education/education').then(m => m.Education)
  },
  {
    path: 'projects',
    loadComponent: () => import('./components/projects/projects').then(m => m.Projects)
  },
  {
    path: 'experience',
    loadComponent: () => import('./components/experience/experience').then(m => m.Experience)
  },
  {
    path: 'publications',
    loadComponent: () => import('./components/publications/publications').then(m => m.Publications)
  },
  {
    path: 'contact',
    loadComponent: () => import('./components/contact/contact').then(m => m.Contact)
  },
  { path: '**', redirectTo: '' }
];
