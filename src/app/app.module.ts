import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AvailableCarsComponent } from './available-cars/available-cars.component';
import { MyReservationsComponent } from './my-reservations/my-reservations.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AvailableCarsComponent,
    MyReservationsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
        {path: 'myreservations',component: MyReservationsComponent },
        {path: 'availablecars', component: AvailableCarsComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
