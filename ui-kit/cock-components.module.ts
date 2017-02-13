//  Модуль с компонентами фреймворка

import { NgModule } from '@angular/core';

import { ButtonComponent } from './button/button.component';
import { SvgIconComponent } from './svg-icon/svg-icon.component';
import { SvgIconRegistryService } from './svg-icon/svg-icon-registry.service';
import { DatepickerComponent } from './datepicker/datepicker.component';

@NgModule({
  declarations: [
    ButtonComponent,
    SvgIconComponent,
    DatepickerComponent,
  ],
  imports: [
    // NgbModule.forRoot(),
  ],
  exports: [
    ButtonComponent,
    SvgIconComponent,
    DatepickerComponent,
  ],
  providers: [SvgIconRegistryService],
})
export class CockComponentsModule {}
