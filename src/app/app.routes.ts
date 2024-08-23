import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AppsComponent } from './pages/apps/apps.component';

export const routes: Routes = [
  {path: '', loadComponent: () => import('../app/pages/welcome/welcome.component').then(m => m.WelcomeComponent)},
  {path: 'app', component: LayoutComponent, children: [
    {path: '',component:AppsComponent, pathMatch: 'full'},
    {path: 'menu', loadComponent: () => import('./pages/apps/apps.component').then(m => m.AppsComponent)},
    {path: 'gallery', loadComponent: () => import('./pages/gallery/tab1.page').then(m => m.Tab1Page)},
    {path: 'text-to-speech', loadComponent: () => import('./pages/text-to-speech/text-to-speech.component').then(m => m.TextToSpeechComponent)},

  ]}

];
