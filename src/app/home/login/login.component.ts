import { Component, OnInit } from '@angular/core';

import { faTwitch } from '@fortawesome/free-brands-svg-icons';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  url: string;
  faTwitch = faTwitch;

  constructor() {
    this.url = `https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=2dry7yykx0qwet2wgtp4z1e94b5opj&redirect_uri=${environment.redirectUrl}&scope=user:read:email`;
  }

  ngOnInit(): void {}
}
