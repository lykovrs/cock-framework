import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';

import { DemoAppComponent } from './demo-app.component';
import { ButtonComponent } from '../button/button.component';
import { IconComponent } from '../icon/icon.component';
import { DatepickerComponent } from '../datepicker/datepicker.component';
import { DemoButtonComponent } from './demo-button/demo-button.component';
import { DemoDatepickerComponent } from './demo-datepicker/demo-datepicker.component';
import { DemoIconComponent } from './demo-icon/demo-icon.component';
import { ComponentListComponent } from './component-list/component-list.component';

const routes: Routes = [

  { path: 'component-list',  component: ComponentListComponent },
  { path: 'button',  component: DemoButtonComponent },
  { path: 'datepicker',  component: DemoDatepickerComponent },
  { path: 'icon',  component: DemoIconComponent },
  { path: '', redirectTo: 'component-list', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    DemoAppComponent,
    ButtonComponent,
    IconComponent,
    DatepickerComponent,
    DemoButtonComponent,
    DemoDatepickerComponent,
    DemoIconComponent,
    ComponentListComponent,
    ComponentListComponent,

  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
  ],
  exports: [ RouterModule ],
  providers: [],
  bootstrap: [DemoAppComponent]
})
export class AppModule { }
