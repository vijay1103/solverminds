import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewRoutingModule } from './view-routing.module';
import { HomeModule } from '../home/home.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ViewEmployeesComponent } from './view-employees.component';

@NgModule({
  declarations: [ViewEmployeesComponent],
  imports: [
    CommonModule,
    ViewRoutingModule,
    HomeModule,
    RouterModule,
    HttpClientModule,
  ]
})
export class ViewModule { }
