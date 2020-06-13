import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AvailableCarsService {
  getAvailableCars(){
    return of([
      { id: 1, brand: "Ford Galaxy"  ,seats: 8, fuelType: "Pb", fuelConsumption: 6.8, power :125, pictureUrl: 'https://www.fordeumedia-c.ford.com/nas/gforcenaslive/pol/cdr08/yys/images/resize767xpolcdr08yysbs-mbvs-dhacmaa(a)(a)pn3jv_21_0.png '},
      { id: 1, brand: "Ford Galaxy"  ,seats: 8, fuelType: "Pb", fuelConsumption: 6.8, power :125, pictureUrl: 'https://www.fordeumedia-c.ford.com/nas/gforcenaslive/pol/cdr08/yys/images/resize767xpolcdr08yysbs-mbvs-dhacmaa(a)(a)pn3jv_21_0.png '},
      { id: 1, brand: "Ford Galaxy" , seats: 8, fuelType: "Pb", fuelConsumption: 6.8, power :125, pictureUrl: 'https://www.fordeumedia-c.ford.com/nas/gforcenaslive/pol/cdr08/yys/images/resize767xpolcdr08yysbs-mbvs-dhacmaa(a)(a)pn3jv_21_0.png '},
      { id: 1, brand: "Ford Galaxy"  ,seats: 8, fuelType: "Pb", fuelConsumption: 6.8, power :125, pictureUrl: 'https://www.fordeumedia-c.ford.com/nas/gforcenaslive/pol/cdr08/yys/images/resize767xpolcdr08yysbs-mbvs-dhacmaa(a)(a)pn3jv_21_0.png '},
      { id: 1, brand: "Ford Galaxy" , seats: 8, fuelType: "Pb", fuelConsumption: 6.8, power :125, pictureUrl: 'https://www.fordeumedia-c.ford.com/nas/gforcenaslive/pol/cdr08/yys/images/resize767xpolcdr08yysbs-mbvs-dhacmaa(a)(a)pn3jv_21_0.png '},
      { id: 1, brand: "Ford Galaxy",  seats: 8, fuelType: "Pb", fuelConsumption: 6.8, power :125, pictureUrl: 'https://www.fordeumedia-c.ford.com/nas/gforcenaslive/pol/cdr08/yys/images/resize767xpolcdr08yysbs-mbvs-dhacmaa(a)(a)pn3jv_21_0.png '}
    ]);


  }
  constructor() { }
}
