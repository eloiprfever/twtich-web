import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  login(accessToken: string): void {
    localStorage.setItem('access_token', accessToken);
  }

  getUserToken(): string {
    return localStorage.getItem('access_token');
  }
}
