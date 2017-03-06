import { NgModule, ViewEncapsulation,  Component, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'sc-datepicker',
  providers: [DatePipe],
  templateUrl: './sc-datepicker.component.html',
  styleUrls: ['./sc-datepicker.component.scss'],
   encapsulation: ViewEncapsulation.Native,
})
export class ScDatepickerComponent implements AfterViewInit {
  public dt: Date = new Date();
  @Input() model: any;
  @Input() minDate;
  @Input() dateDisabled;

 
  @Output() dateModelChange: EventEmitter<Date> = new EventEmitter(); 

  constructor(private datePipe: DatePipe) { }

  private transformDate(date: Date): string {
    // var d = new DatePipe('pt-PT').transform(date, 'yyyy/MM/dd');
    // return d;
    return 'adsf';
  }

  today(): void {
    // this.dt = new Date();
    // this.apply();
  }
  clear(): void {
    // this.dt = this.value = void 0;

  }

  private apply(): void {
    // this.value = this.transformDate(this.dt);
    // this.dateModelChange.emit(this.dt);
  }

  onSelectionDone(event) {
    // this.dt = event;
    // this.apply();

  }

  ngAfterViewInit() {
    // this.dt = new Date(this.value);
  }
}

