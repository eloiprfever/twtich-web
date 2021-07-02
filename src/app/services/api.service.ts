import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly url = 'https://65f73f503073.ngrok.io/get-coupon-code';

  constructor(private http: HttpClient) {}

  getCode(user: User): Observable<string> {
    return this.http
      .get<{ code: string }>(this.url, {
        params: {
          user: user.id,
        },
      })
      .pipe(map((response) => response.code));
  }
}
