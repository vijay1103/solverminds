import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmployeeService } from 'src/app/core/service/employee.service';


@Component({
  selector: 'app-employees-view',
  templateUrl: './employees-view.component.html',
  styleUrls: ['./employees-view.component.css']
})
export class EmployeesViewComponent implements OnInit {
  mySubjectVal: string;
  @Input('myInputVal') myInputVal: string;
  @Input('myInputVals') myInputVals: string;
  @Output('myOutputVal') myOutputVal = new EventEmitter();
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    console.log(this.myInputVal)
    this.employeeService.stringSubject.subscribe(
      data => {
        this.mySubjectVal = data;

        this.myOutputVal.emit(this.myInputVal + ' from child.');
      }
    );
  }

  ngOnDestroy() {
    if (this.employeeService.stringSubject.isStopped)
      this.employeeService.stringSubject.unsubscribe();
  }
}
