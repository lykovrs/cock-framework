//  Модуль с компонентами фреймворка
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonComponent } from './button/sc-button.component';
import { SvgIconComponent } from './svg-icon/sc-svg-icon.component';
import { SvgIconRegistryService } from './svg-icon/sc-svg-icon-registry.service';
import { DatepickerComponent } from './datepicker/sc-datepicker.component';
import { CheckboxComponent } from './checkbox/sc-checkbox.component';
import { TextField } from './text-field/sc-text-field.component';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  declarations: [
    ButtonComponent,
    SvgIconComponent,
    DatepickerComponent,
    CheckboxComponent,
    TextField,
  ],
  imports: [
    // NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule
  ],
  exports: [
    ButtonComponent,
    SvgIconComponent,
    DatepickerComponent,
    CheckboxComponent,
    TextField,
    TextMaskModule
  ],
  providers: [SvgIconRegistryService],
})
export class UiKitModule { }
