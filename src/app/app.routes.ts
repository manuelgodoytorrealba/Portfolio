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
        title: 'Manuel Godoy · Frontend Engineer',
      },
      {
        path: 'cv',
        loadComponent: () =>
          import('./pages/cv/cv').then(m => m.CvComponent),
        title: 'CV · Manuel Godoy',
      },
      {
        path: 'projects',
        loadComponent: () =>
          import('./pages/projects/projects').then(m => m.ProjectsComponent),
        title: 'Proyectos · Manuel Godoy',
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./pages/contact/contact').then(m => m.ContactComponent),
        title: 'Contacto · Manuel Godoy',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];