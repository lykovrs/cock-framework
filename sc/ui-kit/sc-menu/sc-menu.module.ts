import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScTeaserModule} from 'ui-kit/sc-teaser';

import {ScMenuComponent} from './sc-menu/sc-menu.component';
import {ScMenuItemComponent} from './sc-menu-item/sc-menu-item.component';

const SC_MENU_COMPONENTS = [ScMenuComponent, ScMenuItemComponent];

@NgModule({
  declarations: SC_MENU_COMPONENTS,
  exports     : SC_MENU_COMPONENTS,
  imports     : [CommonModule, ScTeaserModule],
  providers   : []
})

export class ScMenuModule {
  static forRoot(): ModuleWithProviders {
    return {ngModule: ScMenuModule};
  }
}
