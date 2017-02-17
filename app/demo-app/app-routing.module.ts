import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentListComponent } from './component-list/component-list.component';
import { DemoButtonComponent } from './demo-button/demo-button.component';
import { DemoIconComponent } from './demo-icon/demo-icon.component';
import { DemoDatepickerComponent } from './demo-datepicker/demo-datepicker.component';
import { DemoCheckboxComponent } from './demo-checkbox/demo-checkbox.component';
import { DemoTextFieldComponent } from './demo-text-field/demo-text-field.component';
import { DemoRadioComponent } from './demo-radio/demo-radio.component';
import { DemoPaginationComponent } from './demo-pagination/demo-pagination.component';
import { DemoPanelComponent } from './demo-panel/demo-panel.component';

const routes: Routes = [
  { path: 'component-list',  component: ComponentListComponent },
  { path: 'button',  component: DemoButtonComponent },
  { path: 'datepicker',  component: DemoDatepickerComponent },
  { path: 'icon',  component: DemoIconComponent },
  { path: 'checkbox', component: DemoCheckboxComponent },
  { path: 'text-field', component: DemoTextFieldComponent },
  { path: 'radio', component: DemoRadioComponent },
  { path: 'pagination', component: DemoPaginationComponent },
  { path: 'panel', component: DemoPanelComponent },
  { path: '', redirectTo: 'component-list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
