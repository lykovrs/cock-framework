import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ScSvgIconModule} from 'ui-kit/sc-svg-icon/sc-svg-icon.module';

import {ScTextFieldComponent} from 'ui-kit/sc-text-field/sc-text-field.component';

const SC_TEXT_FIELD_ITEMS = [ScTextFieldComponent];

@NgModule({
    declarations: SC_TEXT_FIELD_ITEMS,
    exports     : SC_TEXT_FIELD_ITEMS,
    imports     : [CommonModule, FormsModule, ScSvgIconModule],
})
export class ScTextFieldModule {
    static forRoot(): ModuleWithProviders {
        return {ngModule: ScTextFieldModule};
    }
}