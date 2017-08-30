import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ScMenuComponent} from './sc-menu/sc-menu.component';
import {ScMenuItemComponent} from './sc-menu-item/sc-menu-item.component';

const SC_MENU_COMPONENTS = [ScMenuComponent, ScMenuItemComponent];

@NgModule({
  declarations: SC_MENU_COMPONENTS,
  exports     : SC_MENU_COMPONENTS,
  imports     : [CommonModule],
  providers   : []
})

export class ScMenuModule {
  static forRoot(): ModuleWithProviders {
    return {ngModule: ScMenuModule};
  }
}
