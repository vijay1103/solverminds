import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../employee-interface';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employee: any;
  employeeList: Employee[] = [];
  public stringSubject = new Subject<string>();

  constructor(private http: HttpClient) {
  }
  getEmployees() {
    return this.employeeList;
  }
  getEmployee(id: string) {
    this.employee = this.employeeList;
    this.employeeList.map(val => {
      if (val.id == id) {
        this.employee = val;
      }
    });
    return this.employee;
  }


  passValue(data: string | undefined) {
    this.stringSubject.next(data);
  }
}