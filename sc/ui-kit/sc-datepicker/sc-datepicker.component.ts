import * as moment from 'moment';
import { Component, ChangeDetectorRef, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgbDatepicker, NgbCalendar, NgbDatepickerI18n, NgbDatepickerConfig, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {DatepickerViewModel} from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker-view-model';
/*
import {NgbDatepickerKeyMapService} from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker-keymap-service';
import {NgbDatepickerService} from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker-service';
import { CustomDayStyle } from './sc-datepicker.customDayStyle';
*/

@Component({
    selector    : 'sc-datepicker',
    templateUrl : './sc-datepicker.component.html',
    styleUrls   : ['sc-datepicker.component.scss']
})
/*
export class ScDatepickerComponent extends NgbDatepicker {

    public constructor(
        private _keyMapService: NgbDatepickerKeyMapService,
        public _service: NgbDatepickerService,
        private _calendar: NgbCalendar,
        public i18n: NgbDatepickerI18n,
        config: NgbDatepickerConfig,
        private _cd: ChangeDetectorRef,
        private _elementRef: ElementRef
    ) {
        // moment.locale("ru");
        super(
            _keyMapService,
            _service,
            _calendar,
            i18n,
            config,
            _cd,
            _elementRef
        );
    }

}
*/

export class ScDatepickerComponent {
    @Input() model: NgbDateStruct;
    @Output() modelChange = new EventEmitter();

    constructor () {}

    public updateModel() {
        this.modelChange.emit(this.model)
    }

}
