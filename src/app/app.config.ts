import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, Route } from '@angular/router';

// import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Skills } from './components/skills/skills';
import { Projects } from './components/projects/projects';
import { Contact } from './components/contact/contact';
import { Publications } from './components/publications/publications';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { Experience } from './components/experience/experience';
import { Education } from './components/education/education';


export const routes: Route[] = [
  { path: '', component: Hero },
  { path: 'about', component: About },
  { path: 'skills', component: Skills},
  { path: 'projects', component: Projects },
  { path: 'contact', component: Contact},
  {path: 'publications', component: Publications},
  {path: 'hero', component : Hero},
  {path: 'navbar', component: Navbar},
  {path: 'footer', component : Footer},
  {path: 'experience', component: Experience},
  { path: 'education', component : Education},
  
];



export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes), provideClientHydration(withEventReplay())
  ]
};
