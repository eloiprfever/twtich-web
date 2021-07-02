import { Component, OnInit } from '@angular/core';

import { faTwitch } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  faTwitch = faTwitch;
  constructor() {}

  ngOnInit(): void {}
}
