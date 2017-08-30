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
  DemoMenuComponent
} from "./demos";

export const appRoutes: Routes = [
  { path: 'button', component: DemoButtonComponent },
  { path: 'datepicker', component: DemoDatepickerComponent },
  { path: 'icon', component: DemoIconComponent },
  { path: 'checkbox', component: DemoCheckboxComponent },
  { path: 'text-field', component: DemoTextFieldComponent },
  { path: 'radio', component: DemoRadioComponent },
  { path: 'pagination', component: DemoPaginationComponent },
  { path: 'panel', component: DemoPanelComponent },
  { path: 'accordion', component: DemoAccordion },
  { path: 'footer', component: DemoFooter },
  { path: 'header', component: DemoHeader },
  { path: 'typeahead', component: DemoTypeaheadComponent },
  { path: 'popover', component: DemoPopoverComponent },
  { path: 'tooltip', component: DemoTooltipComponent },
  { path: 'panel-tag', component: DemoPanelTagComponent },
  { path: 'combobox', component: DemoComboboxComponent },
  { path: 'modal', component: DemoModalComponent },
  { path: 'preloader', component: DemoPreloaderComponent },
  { path: 'alert-message', component: DemoAlertMessageComponent },
  { path: 'grid', component: DemoGridComponent },
  { path: 'menu', component: DemoMenuComponent },
  { path: '', redirectTo: 'app-root', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
