//  Модуль с компонентами фреймворка
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ButtonComponent } from './button/sc-button.component';
import { SvgIconComponent } from './svg-icon/sc-svg-icon.component';
import { SvgIconRegistryService } from './svg-icon/sc-svg-icon-registry.service';
import { DatepickerComponent } from './datepicker/sc-datepicker.component';
import { CheckboxComponent } from './checkbox/sc-checkbox.component';

@NgModule({
  declarations: [
    ButtonComponent,
    SvgIconComponent,
    DatepickerComponent,
    CheckboxComponent
  ],
  imports: [
    // NgbModule.forRoot(),
    BrowserModule
  ],
  exports: [
    ButtonComponent,
    SvgIconComponent,
    DatepickerComponent,
    CheckboxComponent
  ],
  providers: [SvgIconRegistryService],
})
export class UiKitModule { }
