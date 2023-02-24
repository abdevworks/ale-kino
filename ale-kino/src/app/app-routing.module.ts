import { AuthStateService } from 'src/app/auth/auth.state.service';
import { ShellComponent } from './shell/shell/shell.component';
import { inject, NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivateFn, Router } from '@angular/router';
import { of, tap } from 'rxjs';

const adminRoleGuard: CanActivateFn = () => {
  const userRole = inject(AuthStateService).authValue.role;
  const router = inject(Router);
  return userRole === 'admin' ? true : router.navigate(['']);
};

const customerRoleGuard: CanActivateFn = () => {
  const userRole = inject(AuthStateService).authValue.role;
  const router = inject(Router);
  return (userRole === 'user' || userRole === 'guest') ? true : router.navigate(['/dashboard']);
};

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./user/features/home/home.module'),
        canActivate: [customerRoleGuard]
      },
      {
        path: 'reservation/:id',
        loadChildren: () =>
          import('./user/features/reservation/reservation.module'),
        canActivate: [customerRoleGuard],
      },
      {
        path: 'checkout/:id',
        loadChildren: () => import('./user/features/checkout/checkout.module'),
        canActivate: [customerRoleGuard],
      },
      {
        path: 'summary',
        loadChildren: () => import('./user/features/summary/summary.module'),
        canActivate: [customerRoleGuard],
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./admin/admin.module'),
        canActivate: [adminRoleGuard],
      },
      {
        path: 'user-profile',
        loadChildren: () => import('./user/features/user-profile/user-profile.module'),
        canActivate: [customerRoleGuard],
      },
    ],
  },
  { path: 'login', loadChildren: () => import('./auth/auth.module') },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
  ngOnInit() {}
}
