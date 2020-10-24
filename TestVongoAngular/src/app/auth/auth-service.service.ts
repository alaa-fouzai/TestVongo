import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }
  loggedIn() {
    if (localStorage.getItem('LoggedIn') === 'true') {
      return true;
    } else {
      return false;
    }
  }
}
