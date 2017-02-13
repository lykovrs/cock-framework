import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { CockComponentsModule } from '../../ui-kit/cock-components.module';

import { AppComponent } from './app.component';
import { ComponentListComponent } from './component-list/component-list.component';
import { DemoButtonComponent } from './demo-button/demo-button.component';
import { DemoIconComponent } from './demo-icon/demo-icon.component';
import { DemoDatepickerComponent } from './demo-datepicker/demo-datepicker.component';


@NgModule({
  declarations: [
    AppComponent,
    ComponentListComponent,
    DemoButtonComponent,
    DemoIconComponent,
    DemoDatepickerComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    CockComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
