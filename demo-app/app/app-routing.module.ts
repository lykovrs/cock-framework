import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentListComponent } from './component-list/component-list.component';
import { DemoButtonComponent } from './demo-button/demo-button.component';
import { DemoIconComponent } from './demo-icon/demo-icon.component';
import { DemoDatepickerComponent } from './demo-datepicker/demo-datepicker.component';
import { DemoCheckboxComponent } from './demo-checkbox/demo-checkbox.component';
import { DemoTextField } from './demo-input/demo-input.component';

const routes: Routes = [
  { path: 'component-list',  component: ComponentListComponent },
  { path: 'button',  component: DemoButtonComponent },
  { path: 'datepicker',  component: DemoDatepickerComponent },
  { path: 'icon',  component: DemoIconComponent },
  { path: 'checkbox', component: DemoCheckboxComponent },
  { path: 'input', component: DemoTextField },
  { path: '', redirectTo: 'component-list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
