import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentListComponent } from './component-list/index';
import { DemoButtonComponent } from './demo-button/index';
import { DemoIconComponent } from './demo-icon/index';
import { DemoDatepickerComponent } from './demo-datepicker/index';
import { DemoCheckboxComponent } from './demo-checkbox/index';
import { DemoTextFieldComponent } from './demo-text-field/index';
import { DemoRadioComponent } from './demo-radio/index';
import { DemoPaginationComponent } from './demo-pagination/index';
import { DemoPanelComponent } from './demo-panel/index';
import { DemoTypeaheadComponent } from './demo-typeahead/index';
import { DemoPanelTagComponent } from './demo-panel-tag/index';
import { DemoPopoverComponent } from './demo-popover/index';
import { DemoTooltipComponent } from './demo-tooltip/index';
import { DemoComboboxComponent } from './demo-combobox/index';
import { DemoModalComponent } from './demo-modal/index';
import { DemoPreloaderComponent } from './demo-preloader/index';
import { DemoAlertMessageComponent } from './demo-alert-message/index';

const routes: Routes = [
  { path: 'component-list', component: ComponentListComponent },
  { path: 'button', component: DemoButtonComponent },
  { path: 'datepicker', component: DemoDatepickerComponent },
  { path: 'icon', component: DemoIconComponent },
  { path: 'checkbox', component: DemoCheckboxComponent },
  { path: 'text-field', component: DemoTextFieldComponent },
  { path: 'radio', component: DemoRadioComponent },
  { path: 'pagination', component: DemoPaginationComponent },
  { path: 'panel', component: DemoPanelComponent },
  { path: 'typeahead', component: DemoTypeaheadComponent },
  { path: 'popover', component: DemoPopoverComponent },
  { path: 'tooltip', component: DemoTooltipComponent },
  { path: 'panel-tag', component: DemoPanelTagComponent },
  { path: 'combobox', component: DemoComboboxComponent },
  { path: 'modal', component: DemoModalComponent },
  { path: 'preloader', component: DemoPreloaderComponent },
  { path: 'alert-message', component: DemoAlertMessageComponent },
  { path: '', redirectTo: 'component-list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
