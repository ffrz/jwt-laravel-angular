import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AuthenticatedLayoutComponent } from './layouts/authenticated-layout/authenticated-layout.component';
import { NonAuthenticatedLayoutComponent } from './layouts/non-authenticated-layout/non-authenticated-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: AuthenticatedLayoutComponent,
    canActivate: [AuthGuard], // Protect routes for authenticated users
    children: [
      { path: 'dashboard', loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent), canActivate: [AuthGuard] },
      { path: 'profile', loadComponent: () => import('./pages/profile/profile.component').then(m => m.ProfileComponent), canActivate: [AuthGuard] },
    ],
  },
  {
    path: '',
    component: NonAuthenticatedLayoutComponent,
    children: [
      { path: 'login', loadComponent: () => import('./pages/login/login.component').then(m => { return m.LoginComponent; }) },
      { path: 'register', loadComponent: () => import('./pages/register-page/register-page.component').then(m => m.RegisterPageComponent) },
    ],
  },

  { path: '**', redirectTo: 'dashboard' },
];
