import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HeaderComponent } from './header/header.component';
import { CardMessageComponent } from './card-message/card-message.component';
import { LoginComponent } from './login/login.component';
import { PlanListComponent } from './plan-list/plan-list.component';
import { PlanComponent } from './plan/plan.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    CardMessageComponent,
    LoginComponent,
    PlanListComponent,
    PlanComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, FontAwesomeModule],
})
export class HomeModule {}
