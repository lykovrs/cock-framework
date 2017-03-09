import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';
import { CustomDayStyle } from './sc-datepicker.customDayStyle';

@Component({
  selector: 'sc-datepicker',
  templateUrl: './sc-datepicker.component.html',
  styleUrls: ['sc-datepicker.component.scss'],
  encapsulation: ViewEncapsulation.Native,
})
export class ScDatepickerComponent {
  /**
   * 
   * 
   * 
   * @memberOf ScDatepickerComponent
   */
  @Input() model = new Date();
  @Input() customClass = [];
  @Input() dateDisabled: { date: Date, mode: string }[] = [];
  @Input() minDate:any


  @Output() changedSelectDate = new EventEmitter();


  // public dt: Date = 





  public format: string = 'DD-MM-YYYY';


  private opened: boolean = false;

  public constructor() {
    moment.locale("ru");

    // this.setCustomClass()
  }

  public sendValue(dt) {
    this.changedSelectDate.emit(dt);
    console.log(dt);


  }


}

