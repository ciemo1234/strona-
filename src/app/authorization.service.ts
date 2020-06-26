import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  logged = true;
  get isLoggedIn(): boolean {
    return this.logged;
  }
  logout(){
    this.logged = false;
  }

  constructor() { }
}
