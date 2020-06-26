import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Component } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MyReservationService {
  getMyReservation() {
    return of([
      { id: 1, CarId: "Ford Galaxy", from: '2020-04-12', to: '2020-04-16' },
      { id: 2, CarId: "Renault Master", from: '2020-04-04', to: '2020-04-12' }
    ]);
  }
  constructor() { }
}
