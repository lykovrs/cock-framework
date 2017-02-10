import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { DemoAppComponent } from './demo-app.component';
import { buttonComponent } from '../button/button.component';
import { IconComponent } from '../icon/icon.component';
import { DatepickerComponent } from '../datepicker/datepicker.component';


@NgModule({
  declarations: [
    DemoAppComponent,
    buttonComponent,
    IconComponent,
    DatepickerComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
  ],
  providers: [],
  bootstrap: [DemoAppComponent]
})
export class DemoAppModule { }
