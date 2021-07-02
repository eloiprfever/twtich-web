import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly url = 'https://e35e473ae879.ngrok.io/get-coupon-code';

  constructor(private http: HttpClient) {}

  getCode(user: User): Observable<any> {
    return this.http.get(this.url, {
      params: {
        user: user.id,
      },
    });
  }
}
