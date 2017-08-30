import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScSvgIconModule} from 'ui-kit/sc-svg-icon/sc-svg-icon.module';

import {ScButtonComponent} from 'ui-kit/sc-button/sc-button.component';

const SC_BUTTONS_ITEMS = [ScButtonComponent];

@NgModule({
    declarations: SC_BUTTONS_ITEMS,
    exports     : SC_BUTTONS_ITEMS,
    imports     : [CommonModule, ScSvgIconModule],
})
export class ScButtonModule {
    static forRoot(): ModuleWithProviders {
        return {ngModule: ScButtonModule};
    }
}