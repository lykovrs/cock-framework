import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbDatepickerDayView} from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker-day-view';

import {ScDatepickerComponent} from 'ui-kit/sc-datepicker/sc-datepicker.component';

@NgModule({
    declarations: [ScDatepickerComponent],
    exports     : [ScDatepickerComponent],
    imports     : [CommonModule, FormsModule, NgbDatepickerModule]
})
export class ScDatepickerModule {
    static forRoot(): ModuleWithProviders {
        return {ngModule: ScDatepickerModule};
    }
}
