import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/core/employee-interface';
import { EmployeeService } from 'src/app/core/service/employee.service';

@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.css']
})
export class ViewEmployeesComponent implements OnInit {


  employee: Employee[];

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.employee = this.employeeService.getEmployees();
  }
}
