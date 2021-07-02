import { Component, Input, OnInit } from '@angular/core';
import { Plan } from 'src/app/models/plan';

@Component({
  selector: 'app-plan-list',
  templateUrl: './plan-list.component.html',
  styleUrls: ['./plan-list.component.scss'],
})
export class PlanListComponent implements OnInit {
  @Input() plans: Plan[] = [];

  constructor() {}

  ngOnInit(): void {}
}
