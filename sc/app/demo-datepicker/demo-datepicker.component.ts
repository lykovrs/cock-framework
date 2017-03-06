import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'demo-datepicker',
  templateUrl: './demo-datepicker.component.html',
  styleUrls: ['./demo-datepicker.component.scss']
})


export class DemoDatepickerComponent implements OnInit {
  
  public dt: Date = new Date();
  public minDate: Date = void 0;
  public events: any[];
  // public tomorrow: Date;
  // public afterTomorrow: Date;
  public dateDisabled: {date: Date, mode: string}[];
  // public formats: string[] = ['DD-MM-YYYY', 'YYYY/MM/DD', 'DD.MM.YYYY',
  //   'shortDate'];
  // public format: string = this.formats[0];
  // public dateOptions: any = {
  //   formatYear: 'YY',
  //   startingDay: 1
  // };

  constructor() { }

  ngOnInit() {
  }

  
}
