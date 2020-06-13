import { Component, OnInit } from '@angular/core';
import { AvailableCarsService } from '../available-cars.service';

@Component({
  selector: 'app-available-cars',
  templateUrl: './available-cars.component.html',
  styleUrls: ['./available-cars.component.css']
})
 export class AvailableCarsComponent implements OnInit {
  availableCars = [];
  constructor (private availableCarsService: AvailableCarsService)  { }

  ngOnInit(): void {
    this.availableCarsService
      .getAvailableCars()
      .subscribe(p=>this.availableCars = p);
  }

}
