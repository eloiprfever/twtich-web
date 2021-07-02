import { Component, OnInit } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, filter, map, switchMap } from 'rxjs/operators';

import { LoginService } from '../services/login.service';
import { TwitchService } from '../services/twitch.service';
import { User } from '../models/user';
import { ApiService } from '../services/api.service';
import { Plan } from '../models/plan';

const GAMER_PLANS: Plan[] = [
  {
    name: 'Arcade Night',
    rating: 3,
    price: 15,
    img: 'plan10.png',
  },
  {
    name: 'SHMOOTER: realidad virtual con tus amigos',
    rating: 2,
    price: 10,
    img: 'plan3.png',
  },
  {
    name: 'EGX Rezzed Madrid',
    rating: 1,
    price: 20,
    img: 'plan12.png',
  },
  {
    name: 'Barcelona Games World',
    rating: 3,
    price: 15,
    img: 'plan13.png',
  },
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  userInfo: {};
  user$: Observable<User>;
  gamerPlans: Plan[] = GAMER_PLANS;

  constructor(
    private loginService: LoginService,
    private twitchService: TwitchService,
    private apiService: ApiService
  ) {
    const hashParams = location.hash.substring(1);
    if (!!hashParams) {
      this.userInfo = this.getUserInfo(hashParams);
      if (this.userInfo?.['access_token']) {
        this.loginService.login(this.userInfo['access_token']);
      }
    }
  }

  ngOnInit(): void {
    this.user$ = this.twitchService.getUser().pipe(
      filter((user) => !!user),
      switchMap((user) =>
        this.apiService.getCode(user).pipe(
          map((code) => ({ ...user, code })),
          catchError(() => of(user))
        )
      )
    );
  }

  private getUserInfo(hashParams) {
    return hashParams.split('&').reduce((obj, param) => {
      const [name, value] = param.split('=');
      obj[name] = value;
      return obj;
    }, {});
  }
}
