import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { UiKitModule } from '../ui-kit/ui-kit.module'; // Подключаем модуль компонентов фреймворка

import { AppComponent } from './app.component';
import { ComponentListComponent } from './component-list/index';
import { DemoButtonComponent } from './demo-button/index';
import { DemoIconComponent } from './demo-icon/index';
import { DemoDatepickerComponent } from './demo-datepicker/index';
import { DemoCheckboxComponent } from './demo-checkbox/index';
import { DemoTextFieldComponent } from './demo-text-field/index';
import { DemoRadioComponent } from './demo-radio/index';
import { DemoPaginationComponent } from './demo-pagination/index'
import { DemoPanelComponent } from './demo-panel/index';
import { DemoTypeaheadComponent } from "./demo-typeahead/index";
import { DemoPanelTagComponent } from './demo-panel-tag/index';
import { DemoPopoverComponent } from './demo-popover/index';
import { DemoComboboxComponent } from './demo-combobox/index';
import { DemoModalComponent } from './demo-modal/index';
import { DemoTooltipComponent } from './demo-tooltip/index';
import { DemoPreloaderComponent } from './demo-preloader/index';
import { DemoModalContent } from './demo-modal/content';
import { DemoAlertMessageComponent } from './demo-alert-message/index';


@NgModule({
  declarations: [
    AppComponent,
    ComponentListComponent,
    DemoButtonComponent,
    DemoIconComponent,
    DemoDatepickerComponent,
    DemoCheckboxComponent,
    DemoTextFieldComponent,
    DemoRadioComponent,
    DemoPaginationComponent,
    DemoPanelComponent,
    DemoTypeaheadComponent,
    DemoPanelTagComponent,
    DemoPopoverComponent,
    DemoComboboxComponent,
    DemoModalComponent,
    DemoTooltipComponent,
    DemoModalContent,
    DemoPreloaderComponent,
    DemoAlertMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    JsonpModule,
    UiKitModule,
  ],
  bootstrap: [AppComponent],
  entryComponents: [DemoModalContent]
})
export class AppModule { }
