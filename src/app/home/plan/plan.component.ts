import { Component, Input, OnInit } from '@angular/core';

import { faStar } from '@fortawesome/free-solid-svg-icons';

import { Plan } from 'src/app/models/plan';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss'],
})
export class PlanComponent implements OnInit {
  @Input() plan: Plan;

  faStar = faStar;

  constructor() {}

  ngOnInit(): void {}
}
