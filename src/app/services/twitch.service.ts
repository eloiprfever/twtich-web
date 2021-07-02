import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class TwitchService {
  private readonly url = 'https://api.twitch.tv/helix';

  constructor(private http: HttpClient) {}

  getUser(): Observable<User> {
    return this.http
      .get<{ data: any }>(`${this.url}/users`)
      .pipe(map((response) => response?.data?.[0]));
  }
}
