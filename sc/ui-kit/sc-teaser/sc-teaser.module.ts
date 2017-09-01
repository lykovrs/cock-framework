import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {ScTeaserComponent} from './sc-teaser.component';

const SC_TEASER_COMPONENTS = [ScTeaserComponent];

@NgModule({
  declarations: SC_TEASER_COMPONENTS,
  exports     : SC_TEASER_COMPONENTS,
  imports     : [CommonModule, NgbModule],
  providers   : []
})

export class ScTeaserModule {
  static forRoot(): ModuleWithProviders {
    return {ngModule: ScTeaserModule};
  }
}
