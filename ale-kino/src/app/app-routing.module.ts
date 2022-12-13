import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { CheckoutFormComponent } from './components/checkout-form/checkout-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'reservation/:id', component: ReservationComponent },
  { path: 'checkout', component: CheckoutFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
