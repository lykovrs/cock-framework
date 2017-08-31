import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbTypeaheadConfig, NgbActiveModal, NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { MomentModule } from 'angular2-moment';
import { DatePipe } from "@angular/common";

import { ScSvgIconModule } from 'ui-kit/sc-svg-icon/sc-svg-icon.module';
import { ScButtonModule } from 'ui-kit/sc-button/sc-button.module';
import { ScTextFieldModule } from './sc-text-field/sc-text-field.module';
import { ScPageHeaderModule } from './sc-page-header/sc-page-header.module';
import { ScMenuModule } from './sc-menu/sc-menu.module';
import { ScPanelModule } from 'ui-kit/sc-panel/sc-panel.module';
import { ScAccordionModule } from 'ui-kit/sc-accordion/sc-accordion.module';
import { ScDatepickerModule } from 'ui-kit/sc-datepicker/sc-datepicker.module';
import { ScTypeaheadModule } from 'ui-kit/sc-typeahead/sc-typeahead.module';

// Модуль с компонентами фреймворка
import { ScCheckboxComponent } from './sc-checkbox/sc-checkbox.component';
import { ScRadioComponent } from './sc-radio/sc-radio.component';
import { ScPaginationComponent } from './sc-pagination/sc-pagination.component';
import { ScPanelTagComponent } from './sc-panel-tag/sc-panel-tag.component';
import { ScTagComponent } from './sc-panel-tag/sc-tag/sc-tag.component';
import { ScComboboxComponent } from './sc-combobox/sc-combobox.component';
import { ScModalComponent } from './sc-modal/sc-modal.component';
import { ScPreloaderComponent } from './sc-preloader/sc-preloader.component';
import { ScSpinnerComponent } from './sc-spinner';
import { ScAlertComponent } from './sc-alert/sc-alert.component';
import { ScFooterComponent } from './sc-footer/sc-footer.component';
import { DatepickerModule } from 'ngx-bootstrap';

import { ScGridComponent } from './sc-grid/sc-grid.component';

// Директивы
import { ScModalAddDirective } from './sc-modal/sc-modal-add.directive';
import { ScClockDirective } from './sc-footer/sc-clock/sc-clock.directive';

// Сервисы
import { ScRadioService } from './sc-radio/sc-radio.service';
import { ScModalService } from './sc-modal/sc-modal.service';
import { ScModalAddService } from './sc-modal/sc-modal-add.service';
import { ScAlertService } from './sc-alert/sc-alert.service';
import { ScAlertOneService } from './sc-alert/sc-alert-one.service';

// Сторонние модули
import { TextMaskModule } from 'angular2-text-mask'; //  Маска полей ввода

@NgModule({
  declarations: [
    ScCheckboxComponent,
    ScRadioComponent,
    ScPaginationComponent,
    ScPanelTagComponent,
    ScTagComponent,
    ScComboboxComponent,
    ScModalComponent,
    ScModalAddDirective,
    ScClockDirective,
    ScPreloaderComponent,
    ScSpinnerComponent,
    ScAlertComponent,
    ScGridComponent,
    ScFooterComponent
  ],
  imports: [
    NgbModule.forRoot(),
    ScDatepickerModule,
    ScPageHeaderModule.forRoot(),
    ScMenuModule.forRoot(),
    ScSvgIconModule.forRoot(),
    ScTypeaheadModule,
    MomentModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule
  ],
  exports: [
    ScSvgIconModule,
    ScButtonModule,
    ScPanelModule,
    ScAccordionModule,
    ScTextFieldModule,
    ScPageHeaderModule,
    ScMenuModule,
    ScDatepickerModule,
    ScGridComponent,
    ScCheckboxComponent,
    ScTypeaheadModule,
    TextMaskModule,
    NgbModule,
    NgbDropdown,
    ScRadioComponent,
    ScPaginationComponent,
    ScPanelTagComponent,
    ScTagComponent,
    ScComboboxComponent,
    ScModalComponent,
    ScModalAddDirective,
    ScClockDirective,
    DatepickerModule,
    ScPreloaderComponent,
    ScSpinnerComponent,
    ScAlertComponent,
    ScFooterComponent
  ],
  providers: [
    ScRadioService,
    NgbTypeaheadConfig,
    ScModalService,
    NgbActiveModal,
    NgbDropdown,
    ScModalAddService,
    ScAlertService,
    ScAlertOneService,
    DatePipe
  ],
  entryComponents: [ScModalComponent]
})
export class UiKitModule { }
