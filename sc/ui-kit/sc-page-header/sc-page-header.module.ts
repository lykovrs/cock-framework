import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScMenuModule} from 'ui-kit/sc-menu/sc-menu.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ScHeaderComponent} from './sc-page-header/sc-page-header.component';
import {ScUserProfileComponent} from './sc-user-profile/sc-user-profile.component';

const SC_PAGE_HEADER_COMPONENTS = [ScHeaderComponent, ScUserProfileComponent];

@NgModule({
  declarations: SC_PAGE_HEADER_COMPONENTS,
  exports     : SC_PAGE_HEADER_COMPONENTS,
  imports     : [CommonModule, ScMenuModule, NgbModule],
  providers   : []
})

export class ScPageHeaderModule {
  static forRoot(): ModuleWithProviders {
    return {ngModule: ScPageHeaderModule};
  }
}
