import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScPanelModule} from './../sc-panel/sc-panel.module';
import {ScSvgIconModule} from './../sc-svg-icon/sc-svg-icon.module';

import {ScPanelContent, ScAccordionContent, ScAccordionComponent} from './sc-accordion/sc-accordion.component';
import {ScAccordionsComponent} from './sc-accordions/sc-accordions.component';
import {ScAccordionsService} from './sc-accordions/sc-accordions.service';

const SC_ACCORDION_ITEMS = [ScPanelContent, ScAccordionContent, ScAccordionComponent, ScAccordionsComponent];

@NgModule({
    declarations: SC_ACCORDION_ITEMS,
    exports     : SC_ACCORDION_ITEMS,
    imports     : [CommonModule, ScPanelModule, ScSvgIconModule],
    providers   : [ScAccordionsService]
})
export class ScAccordionModule {
    static forRoot(): ModuleWithProviders {
        return {ngModule: ScAccordionModule};
    }
}
