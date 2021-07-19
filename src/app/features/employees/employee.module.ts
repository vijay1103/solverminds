import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeesComponent } from './employees.component';
import { HeaderComponent } from '../home/header/header.component';
import { HomeModule } from '../home/home.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeesViewComponent } from './employees-view/employees-view.component';
import {ButtonModule} from 'primeng/button';
@NgModule({
  declarations: [EmployeesComponent, EmployeesViewComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    HomeModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule
  ]
})
export class EmployeeModule { }
