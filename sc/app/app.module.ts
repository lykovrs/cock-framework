import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { UiKitModule } from '../ui-kit/ui-kit.module'; // Подключаем модуль компонентов фреймворка

import { AppComponent } from './app.component';
import { ComponentListComponent } from './component-list/index';

import {
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
  DemoPreloaderComponent,
  DemoModalContent,
  DemoAlertMessageComponent,
  DemoAccordion,
  DemoFooter,
  DemoHeader,
  DemoGridComponent,
  DemoMenuComponent,
  DemoSpinnerComponent
} from "./demos";


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
    DemoModalContent,
    DemoTooltipComponent,
    DemoPreloaderComponent,
    DemoAlertMessageComponent,
    DemoAccordion,
    DemoFooter,
    DemoHeader,
    DemoGridComponent,
    DemoMenuComponent,
    DemoSpinnerComponent
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
