import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ScSvgIconComponent} from './sc-svg-icon.component';
import {ScSvgIconRegistryService} from './sc-svg-icon-registry.service';

@NgModule({
    declarations    : [ScSvgIconComponent],
    exports         : [ScSvgIconComponent],
    providers       : [ScSvgIconRegistryService],
    imports         : [CommonModule],
    entryComponents : [ScSvgIconComponent]
})
export class ScSvgIconModule {
    static forRoot(): ModuleWithProviders {
        return {ngModule: ScSvgIconModule};
    }
}