import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/core/service/employee.service';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employeeForm: FormGroup;
  isEdit: Boolean = false;
  msg: String = '';
  toggleChildElement: boolean = true;
  myTextVal: any;
  valueFromChild: string;
  counter = 0;
  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.NewForm()
  }

  NewForm(): void {
    this.employeeForm = this.formBuilder.group({
      name: [''],
      id: [''],
      designation: [''],
      gender: [''],
    })
  }
  ngOnInit() {
    this.route.params.subscribe(param => {
      console.log(param)
      if (param && param.id) {
        let emp = this.employeeService.getEmployee(param.id);
        if (emp) {
          this.employeeForm.setValue(emp);
          this.isEdit = true;
        }
      }
    })
  }

  resetForm() {
    this.employeeForm.reset();
  }

  add() {
    if (this.employeeForm.valid) {
      this.employeeService.employeeList.push(this.employeeForm.value);
      this.resetForm();
    }
    else {
      this.msg = 'Please complete form'
    }
  }

  sendTextValue() {
    console.log(this.myTextVal)
    this.employeeService.passValue(this.myTextVal);
  }

  readOutputValueEmitted(val: string) {
    this.valueFromChild = val;
  }

  toggleChildElementHandler() {
    this.toggleChildElement = !this.toggleChildElement;
  }


}
