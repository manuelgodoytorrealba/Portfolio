import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layout/shell/shell').then(m => m.ShellComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/home/home').then(m => m.HomeComponent),
        pathMatch: 'full',
      },
      {
        path: 'cv',
        loadComponent: () =>
          import('./pages/cv/cv').then(m => m.CvComponent),
      },
      {
        path: 'projects',
        loadComponent: () =>
          import('./pages/projects/projects').then(m => m.ProjectsComponent),
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./pages/contact/contact').then(m => m.ContactComponent),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];