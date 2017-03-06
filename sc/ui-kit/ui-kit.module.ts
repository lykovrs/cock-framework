import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbTypeaheadConfig, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

// Модуль с компонентами фреймворка
import { ScButtonComponent } from './sc-button/sc-button.component';
import { ScSvgIconComponent } from './sc-svg-icon/sc-svg-icon.component';
import { ScDatepickerComponent } from './sc-datepicker/sc-datepicker.component';
import { ScCheckboxComponent } from './sc-checkbox/sc-checkbox.component';
import { ScTextField } from './sc-text-field/sc-text-field.component';
import { ScRadioComponent } from './sc-radio/sc-radio.component';
import { ScPaginationComponent } from './sc-pagination/sc-pagination.component';
import { ScPanelComponent } from './sc-panel/sc-panel.component';
import { ScTypeaheadComponent } from './sc-typeahead/sc-typeahead.component';
import { ScPanelTagComponent } from './sc-panel-tag/sc-panel-tag.component';
import { ScTagComponent } from './sc-panel-tag/sc-tag/sc-tag.component';
import { ScComboboxComponent } from './sc-combobox/sc-combobox.component';
import { ScModalComponent } from './sc-modal/sc-modal.component';
import { ScPreloaderComponent } from './sc-preloader/sc-preloader.component';
import { DatepickerModule } from 'ng2-bootstrap';

// Директивы
import { ScModalAddDirective } from './sc-modal/sc-modal-add.directive';

// Сервисы
import { ScRadioService } from './sc-radio/sc-radio.service';
import { ScSvgIconRegistryService } from './sc-svg-icon/sc-svg-icon-registry.service';
import { ScTypeaheadService } from './sc-typeahead/sc-typeahead.service';
import { ScModalService } from './sc-modal/sc-modal.service';
import { ScModalAddService } from './sc-modal/sc-modal-add.service';

// Сторонние модули
import { TextMaskModule } from 'angular2-text-mask'; //  Маска полей ввода

@NgModule({
  declarations: [
    ScButtonComponent,
    ScSvgIconComponent,
    ScDatepickerComponent,
    ScCheckboxComponent,
    ScTextField,
    ScRadioComponent,
    ScPaginationComponent,
    ScPanelComponent,
    ScTypeaheadComponent,
    ScPanelTagComponent,
    ScTagComponent,
    ScComboboxComponent,
    ScModalComponent,
    ScModalAddDirective,
    ScPreloaderComponent
  ],
  imports: [
    NgbModule.forRoot(),
    DatepickerModule.forRoot(),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule
  ],
  exports: [
    ScButtonComponent,
    ScSvgIconComponent,
    ScDatepickerComponent,
    ScCheckboxComponent,
    ScTextField,
    TextMaskModule,
    NgbModule,
    ScRadioComponent,
    ScPaginationComponent,
    ScPanelComponent,
    ScTypeaheadComponent,
    ScPanelTagComponent,
    ScTagComponent,
    ScComboboxComponent,
    ScModalComponent,
    ScModalAddDirective,
    DatepickerModule,
    ScPreloaderComponent
  ],
  providers: [
    ScSvgIconRegistryService,
    ScRadioService,
    ScTypeaheadService,
    NgbTypeaheadConfig,
    ScModalService,
    NgbActiveModal,
    ScModalAddService
  ],
  entryComponents: [ScModalComponent]
})
export class UiKitModule { }
