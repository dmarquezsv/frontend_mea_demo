import { Routes } from '@angular/router';

export const routes: Routes = [
  
     // Vista de detalles de usuario con un parámetro dinámico
  {
    path: 'user/:id',
    loadComponent: () => import('./components/user/user-detail/user-detail.component').then(m => m.UserDetailComponent),
  }
];
