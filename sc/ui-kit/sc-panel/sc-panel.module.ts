import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScSvgIconModule} from './../sc-svg-icon/sc-svg-icon.module';

import {ScPanelComponent} from './sc-panel.component';

const SC_PANEL_ITEMS = [ScPanelComponent];

@NgModule({
    declarations: SC_PANEL_ITEMS,
    exports     : SC_PANEL_ITEMS,
    imports     : [CommonModule, ScSvgIconModule]
})
export class ScPanelModule {
    static forRoot(): ModuleWithProviders {
        return {ngModule: ScPanelModule};
    }
}