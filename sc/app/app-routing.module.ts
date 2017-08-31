import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
  DemoAccordion,
  DemoTypeaheadComponent,
  DemoPanelTagComponent,
  DemoPopoverComponent,
  DemoComboboxComponent,
  DemoModalComponent,
  DemoTooltipComponent,
  DemoPreloaderComponent,
  DemoModalContent,
  DemoAlertMessageComponent,
  DemoFooter,
  DemoHeader,
  DemoGridComponent,
  DemoMenuComponent,
  DemoSpinnerComponent
} from "./demos";

export const appRoutes: Routes = [
  { path: 'accordion', component: DemoAccordion },
  { path: 'alert-message', component: DemoAlertMessageComponent },
  { path: 'button', component: DemoButtonComponent },
  { path: 'checkbox', component: DemoCheckboxComponent },
  { path: 'combobox', component: DemoComboboxComponent },
  { path: 'datepicker', component: DemoDatepickerComponent },
  { path: 'footer', component: DemoFooter },
  { path: 'grid', component: DemoGridComponent },
  { path: 'header', component: DemoHeader },
  { path: 'icon', component: DemoIconComponent },
  { path: 'menu', component: DemoMenuComponent },
  { path: 'modal', component: DemoModalComponent },
  { path: 'pagination', component: DemoPaginationComponent },
  { path: 'panel', component: DemoPanelComponent },
  { path: 'panel-tag', component: DemoPanelTagComponent },
  { path: 'popover', component: DemoPopoverComponent },
  { path: 'preloader', component: DemoPreloaderComponent },
  { path: 'radio', component: DemoRadioComponent },
  { path: 'spinner', component: DemoSpinnerComponent },
  { path: 'text-field', component: DemoTextFieldComponent },
  { path: 'tooltip', component: DemoTooltipComponent },
  { path: 'typeahead', component: DemoTypeaheadComponent },
  { path: '', redirectTo: 'app-root', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
