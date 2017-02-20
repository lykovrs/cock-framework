import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-pagination',
  templateUrl: './demo-pagination.component.html',
  styleUrls: ['./demo-pagination.component.scss']
})
export class DemoPaginationComponent implements OnInit {

  totalTest1 = 100;
  totalTest2 = 89;
  totalTest3 = 1000;
  totalTest4 = 234;
  totalTest5 = 11;
  perPageTest2 = 30;
  pageSizeTest1 = 4;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.totalTest1 = 200;
    }, 4000);
  }

  customClick() {
    console.log('test click');
  }

}
