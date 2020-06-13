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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AvailableCarsComponent,
    MyReservationsComponent,
    CarInfoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
        {path: 'myreservations',component: MyReservationsComponent },
        {path: 'availablecars', component: AvailableCarsComponent },
    ]),
    NgbModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
