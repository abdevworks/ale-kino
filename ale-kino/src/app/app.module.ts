import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { faCartShopping, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { MovieComponent } from './components/movie/movie.component';
import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { RoundedNavComponent } from './components/rounded-nav/rounded-nav.component';
import { DateNavComponent } from './components/date-nav/date-nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { CheckoutFormComponent } from './components/checkout-form/checkout-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    ButtonComponent,
    HeaderComponent,
    RoundedNavComponent,
    DateNavComponent,
    FooterComponent,
    HomePageComponent,
    ReservationComponent,
    CheckoutFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faCartShopping);
    library.addIcons(faTrashCan);
  }
}
