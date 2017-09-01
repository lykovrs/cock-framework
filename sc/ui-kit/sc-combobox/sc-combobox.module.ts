import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {ScSvgIconModule} from './../sc-svg-icon/sc-svg-icon.module';
import {ScTextFieldModule} from 'ui-kit/sc-text-field/sc-text-field.module';
import {ScWindowListComponent} from './sc-window-list/sc-window-list.component';
import {ScHighlightComponent} from './sc-highlight/sc-highlight.component';
import {ScTypeaheadDirective} from './sc-typeahead/sc-typeahead.directive';
import {ScTypeaheadComponent} from './sc-typeahead/sc-typeahead.component';
import {ScTypeaheadConfig} from './sc-typeahead/sc-typeahead-config';

@NgModule({
    declarations    : [ScTypeaheadDirective, ScWindowListComponent, ScHighlightComponent, ScTypeaheadComponent],
    exports         : [ScTypeaheadDirective, ScTypeaheadComponent],
    imports         : [CommonModule, FormsModule, ScTextFieldModule, ScSvgIconModule],
    providers       : [ScTypeaheadConfig],
    entryComponents : [ScWindowListComponent]
})
export class ScComboboxModule {
    static forRoot(): ModuleWithProviders {
        return {ngModule: ScComboboxModule};
    }
}
