import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Модуль с компонентами фреймворка
import { ScButtonComponent } from './sc-button/sc-button.component';
import { ScSvgIconComponent } from './sc-svg-icon/sc-svg-icon.component';
import { ScDatepickerComponent } from './sc-datepicker/sc-datepicker.component';
import { ScCheckboxComponent } from './sc-checkbox/sc-checkbox.component';
import { ScTextField } from './sc-text-field/sc-text-field.component';
import { ScRadioComponent } from './sc-radio/sc-radio.component';
import { ScPaginationComponent } from './sc-pagination/sc-pagination.component';
import { ScPanelComponent } from './sc-panel/sc-panel.component';

// Сервисы
import { ScRadioService } from './sc-radio/sc-radio.service';
import { ScSvgIconRegistryService } from './sc-svg-icon/sc-svg-icon-registry.service';

// Сторонние модули
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  declarations: [
    ScButtonComponent,
    ScSvgIconComponent,
    ScDatepickerComponent,
    ScCheckboxComponent,
    ScTextField,
    ScRadioComponent,
    ScPaginationComponent,
    ScPanelComponent
  ],
  imports: [
    // NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule
  ],
  exports: [
    ScButtonComponent,
    ScSvgIconComponent,
    ScDatepickerComponent,
    ScCheckboxComponent,
    ScTextField,
    TextMaskModule,
    ScRadioComponent,
    ScPaginationComponent,
    ScPanelComponent
  ],
  providers: [
    ScSvgIconRegistryService,
    ScRadioService
  ],
})
export class UiKitModule { }
