import { StoreModule } from './store/store.module';
import { StoreComponent } from './store/store.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AvailableCarsComponent } from './available-cars/available-cars.component';
import { MyReservationsComponent } from './my-reservations/my-reservations.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarInfoComponent } from './car-info/car-info.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { WspolpracaComponent } from './wspolpraca/wspolpraca.component';
import { KontaktComponent } from './kontakt/kontakt.component';
//import { SklepComponent } from './sklep/sklep.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AvailableCarsComponent,
    MyReservationsComponent,
    CarInfoComponent,
    HomeComponent,
    LoginComponent,
    WspolpracaComponent,
    KontaktComponent,
    StoreComponent,



  ],
  imports: [
    BrowserModule,StoreModule,
    RouterModule.forRoot([
        {path: 'myreservations',component: MyReservationsComponent },
        {path: 'availablecars', component: AvailableCarsComponent },
        {path: 'login' , component: LoginComponent},
        {path: 'kontakt',component:KontaktComponent},
        {path: 'wspolpraca', component:WspolpracaComponent},
        {path: 'home' , component: HomeComponent},
        {path: '**' , redirectTo: '/home' , pathMatch: 'full'}

    ]),
    NgbModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [{provide: LOCALE_ID, useValue:"pl-PL"}],
  bootstrap: [AppComponent]
})
export class AppModule { }
