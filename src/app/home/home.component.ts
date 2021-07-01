import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  userInfo: {};

  constructor() {
    const hashParams = location.hash.substring(1);
    if (!!hashParams) {
      this.userInfo = hashParams.split('&').reduce((obj, param) => {
        const [name, value] = param.split('=');
        obj[name] = value;
        return obj;
      }, {});
    }
    console.log(this.userInfo);
  }

  ngOnInit(): void {}
}
