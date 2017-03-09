import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { UiKitModule } from '../ui-kit/ui-kit.module'; // Подключаем модуль компонентов фреймворка

import { AppComponent } from './app.component';
import { ComponentListComponent } from './component-list/component-list.component';
import { DemoButtonComponent } from './demo-button/demo-button.component';
import { DemoIconComponent } from './demo-icon/demo-icon.component';
import { DemoDatepickerComponent } from './demo-datepicker/demo-datepicker.component';
import { DemoCheckboxComponent } from './demo-checkbox/demo-checkbox.component';
import { DemoTextFieldComponent } from './demo-text-field/demo-text-field.component';
import { DemoRadioComponent } from './demo-radio/demo-radio.component';
import { DemoPaginationComponent } from './demo-pagination/demo-pagination.component'
import { DemoPanelComponent } from './demo-panel/demo-panel.component';
import { DemoTypeaheadComponent } from "./demo-typeahead/demo-typeahead.component";
import { DemoPanelTagComponent } from './demo-panel-tag/demo-panel-tag.component';
import { DemoPopoverComponent } from './demo-popover/demo-popover.component';
import { DemoComboboxComponent } from './demo-combobox/demo-combobox.component';
import { DemoModalComponent } from './demo-modal/demo-modal.component';
import { DemoTooltipComponent } from './demo-tooltip/demo-tooltip.component';
import { DemoPreloaderComponent } from './demo-preloader/demo-preloader.component';
import { DemoModalContent } from './demo-modal/demo-modal-content.component';
import { DemoAlertMessageComponent } from './demo-alert-message/demo-alert-message.component';


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
