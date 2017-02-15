import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { UiKitModule } from '../../ui-kit/ui-kit.module';

import { AppComponent } from './app.component';
import { ComponentListComponent } from './component-list/component-list.component';
import { DemoButtonComponent } from './demo-button/demo-button.component';
import { DemoIconComponent } from './demo-icon/demo-icon.component';
import { DemoDatepickerComponent } from './demo-datepicker/demo-datepicker.component';
import { DemoCheckboxComponent } from './demo-checkbox/demo-checkbox.component';
import { DemoInputComponent } from './demo-input/demo-input.component';


@NgModule({
  declarations: [
    AppComponent,
    ComponentListComponent,
    DemoButtonComponent,
    DemoIconComponent,
    DemoDatepickerComponent,
    DemoCheckboxComponent,
    DemoInputComponent,
    DemoInputComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    UiKitModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
