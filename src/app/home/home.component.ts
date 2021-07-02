import { Component, OnInit } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { LoginService } from '../services/login.service';
import { TwitchService } from '../services/twitch.service';
import { User } from '../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  userInfo: {};
  user$: Observable<User>;

  constructor(
    private loginService: LoginService,
    private twitchService: TwitchService
  ) {
    const hashParams = location.hash.substring(1);
    if (!!hashParams) {
      this.userInfo = this.getUserInfo(hashParams);
      if (this.userInfo?.['access_token']) {
        this.loginService.login(this.userInfo['access_token']);
      }
    }
    console.log(this.userInfo);
  }

  ngOnInit(): void {
    this.user$ = this.twitchService
      .getUser()
      .pipe(catchError((err) => of(null)));
  }

  private getUserInfo(hashParams) {
    return hashParams.split('&').reduce((obj, param) => {
      const [name, value] = param.split('=');
      obj[name] = value;
      return obj;
    }, {});
  }
}
