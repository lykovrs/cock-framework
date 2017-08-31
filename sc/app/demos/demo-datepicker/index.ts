import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

const now = new Date();

@Component({
    selector: 'demo-datepicker',
    templateUrl: './index.html',
    styleUrls: ['./index.scss']
})
export class DemoDatepickerComponent implements OnInit {
    model: NgbDateStruct;

    public dateDisabled: { date: Date, mode: string }[];
    public minDate: Date = void 0;

    public events: any[];

    public tomorrow: Date;

    public afterTomorrow: Date;

    public customDaysStyle: any[];
    constructor() { }

    ngOnInit() {
    }

    selectToday() {
        this.model = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
    }

}
