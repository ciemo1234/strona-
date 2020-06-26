import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AvailableCarsComponent } from './available-cars/available-cars.component';
import { MyReservationsComponent } from './my-reservations/my-reservations.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarInfoComponent } from './car-info/car-info.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AvailableCarsComponent,
    MyReservationsComponent,
    CarInfoComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
        {path: 'myreservations',component: MyReservationsComponent },
        {path: 'availablecars', component: AvailableCarsComponent },
        {path: 'login' , component: LoginComponent},
        {path: 'home' , component: HomeComponent},
        {path: '**' , redirectTo: '/home' , pathMatch: 'full'}
    ]),
    NgbModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
