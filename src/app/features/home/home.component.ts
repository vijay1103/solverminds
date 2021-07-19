import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CommonService } from 'src/app/core/service/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private unSubscribe = new Subject<void>();
  users: any;
  sortDir = 1;
  constructor(private commonSerice: CommonService) { }

  ngOnInit(): void {
    this.commonSerice.get_data().pipe(takeUntil(this.unSubscribe)).subscribe(
      response => {
        console.log(response)
        this.users = response.data
      })
  }

  onSortClick(event: { currentTarget: any; }) {
    let target = event.currentTarget,
      classList = target.classList;

    if (classList.contains('fa-chevron-up')) {
      classList.remove('fa-chevron-up');
      classList.add('fa-chevron-down');
      this.sortDir = -1;
    } else {
      classList.add('fa-chevron-up');
      classList.remove('fa-chevron-down');
      this.sortDir = 1;
    }
    this.sortArr('title');
  }

  sortArr(colName: any) {
    this.users.sort((a: any, b: any) => {
      a = a[colName].toLowerCase();
      b = b[colName].toLowerCase();
      return a.localeCompare(b) * this.sortDir;
    });
  }

}
