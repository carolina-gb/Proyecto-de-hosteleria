import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthLoginService {
  constructor() {}

  isLoggedIn: boolean = false;
  username: string = '';

  getLoginStatus() {
    return this.isLoggedIn;
  }

  login() {
    this.isLoggedIn = true;
    this.username = 'admin';
  }

  logout() {
    this.isLoggedIn = false;
    this.username = '';
  }
}
