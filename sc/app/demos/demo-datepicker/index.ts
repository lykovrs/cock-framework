import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'demo-datepicker',
  templateUrl: './index.html',
  styleUrls: ['./index.scss']
})


export class DemoDatepickerComponent implements OnInit {

  public dt: Date = new Date();
  public dateDisabled: { date: Date, mode: string }[];
  public minDate: Date = void 0;

  public events: any[];

  public tomorrow: Date;

  public afterTomorrow: Date;

  public customDaysStyle: any[];
  constructor() {
    (this.tomorrow = new Date()).setDate(this.tomorrow.getDate() + 1);
    (this.afterTomorrow = new Date()).setDate(this.tomorrow.getDate() + 2);

    (this.minDate = new Date()).setDate(this.minDate.getDate() - 3);

    (this.dateDisabled = []);
    this.events = [
      { date: this.tomorrow, status: 'full' },
      { date: this.afterTomorrow, status: 'partially' }
    ];
    (this.customDaysStyle = []);

  }

  ngOnInit() {
  }

  public getDate(): number {
    return this.dt && this.dt.getTime() || new Date().getTime();

  }

  public today(): void {
    this.dt = new Date();
  }

  public d20090824(): void {
    this.dt = moment('2009-08-24', 'YYYY-MM-DD')
      .toDate();
  }

  public disableTomorrow(): void {
    this.dateDisabled = [{ date: this.tomorrow, mode: 'day' }];
  }

  public disabled(date: Date, mode: string): boolean {
    return (mode === 'day' && (date.getDay() === 0 || date.getDay() === 6));
  }

  // public open(): void {
  //   this.opened = !this.opened;
  // }

  public clear(): void {
    this.dt = void 0;
    this.dateDisabled = undefined;
  }

  public toggleMin(): void {    
    this.dt = new Date(this.minDate.valueOf());
  }

  public setCustomClass() {
    let day = moment('2017-03-17', 'YYYY-MM-DD')
      .toDate();
    // let day = new Date('2017-03-17')

    // let customDay: CustomDayStyle = new CustomDayStyle(day, 'day', 'dayOf');
    //   {
    //     date: day,
    //     mode: 'day',
    //     clazz: 'testCLS'
    //   };

    // this.customDaysStyle.push(customDay);
    console.log(this.customDaysStyle);
  }
  public modelChange(model) {
    this.dt = model;

  }
}
