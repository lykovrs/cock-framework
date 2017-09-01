import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ScSvgIconModule} from './../sc-svg-icon/sc-svg-icon.module';

export * from "./sc-typeahead.interfaces";
export * from "./sc-typeahead.service";
export * from "./sc-typeahead.component";

import {ScTypeaheadComponent} from './sc-typeahead.component';
import {ScTypeaheadService} from './sc-typeahead.service';

@NgModule({
    declarations: [ScTypeaheadComponent],
    exports     : [ScTypeaheadComponent],
    imports     : [CommonModule, FormsModule, NgbModule, ScSvgIconModule],
    providers   : [ScTypeaheadService]
})
export class ScTypeaheadModule {
    static forRoot(): ModuleWithProviders {
        return {ngModule: ScTypeaheadModule};
    }
}
