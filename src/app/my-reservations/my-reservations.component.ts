import { Component, OnInit, Input } from '@angular/core';
import { MyReservationService } from '../my-reservation.service';
import { using } from 'rxjs';

@Component({
  selector: 'app-my-reservations',
  templateUrl: './my-reservations.component.html',
  styleUrls: ['./my-reservations.component.css']
})
export class MyReservationsComponent implements OnInit {

  myreservation = [];
  constructor(private myReservationService: MyReservationService) { }

  ngOnInit(): void {
    this.myReservationService
      .getMyReservation()
      .subscribe(p => this.myreservation = p)
  }
    
}