//  Модуль с компонентами фреймворка
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonComponent } from './button/sc-button.component';
import { SvgIconComponent } from './svg-icon/sc-svg-icon.component';
import { SvgIconRegistryService } from './svg-icon/sc-svg-icon-registry.service';
import { DatepickerComponent } from './datepicker/sc-datepicker.component';
import { CheckboxComponent } from './checkbox/sc-checkbox.component';
import { InputComponent } from './input/sc-input.component';

@NgModule({
  declarations: [
    ButtonComponent,
    SvgIconComponent,
    DatepickerComponent,
    CheckboxComponent,
    InputComponent,
  ],
  imports: [
    // NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ButtonComponent,
    SvgIconComponent,
    DatepickerComponent,
    CheckboxComponent,
    InputComponent,
  ],
  providers: [SvgIconRegistryService],
})
export class UiKitModule { }
