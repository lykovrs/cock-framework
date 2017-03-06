/**
 * Created by dkovalev on 03.03.2017.
 */
/**
 * Modules
 */
import { Injectable } from "@angular/core";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IModal, IModalParams } from './sc-modal.interfaces';

/**
 * Services
 */
import { ScModalAddService } from './sc-modal-add.service';

/**
 * Components
 */
import { ScModalComponent } from './sc-modal.component';

@Injectable()
export class ScModalService {

  constructor(
    private ngbModal: NgbModal,
    private scModalAddService: ScModalAddService
  ) {

  }

  /**
   * Открытие модального окна
   * @param content
   * @returns {Promise<any>}
   */
  open(content: IModal) {
    return this.openCustom(content);
  }

  /**
   * Открытие модального окна с передачей своего компонента
   * @param content
   * @returns {Promise<any>}
   */
  openCustom(content: IModal): Promise<any> {
    this.scModalAddService.setComponent(content.component);
    const modalRef = this.ngbModal.open(ScModalComponent, content.options);
    content && content.params && this.addParamsToModal(modalRef, content.params);
    return modalRef.result;
  }

  /**
   * Добавляем параметры модальному окну
   * @param modalRef
   * @param params
   * @returns {Promise<any>}
   */
  addParamsToModal(modalRef: any, params: IModalParams): ScModalService {
    Object.keys(params).forEach(param => {
      modalRef.componentInstance[param] = params[param];
    });
    return this;
  }
}
