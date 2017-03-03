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
 * Components
 */
import { ScModalComponent } from './sc-modal.component';

@Injectable()
export class ScModalService {

  constructor(private ngbModal: NgbModal) {}

  /**
   * Открытие модального окна
   * @param content
   * @returns {ScModalService}
   */
  open(content: IModal = null) {
    return content && content.component ? this.openCustom(content) : this.openTemplate(content);
  }

  /**
   * Открытие модального окна по умолчанию
   * @returns {ScModalService}
   */
  openTemplate(content: IModal): ScModalService {
    return content && content.params ? this.openSimple(content.params) : this.openDefault();
  }

  /**
   * Открытие модального окна с передачей своего компонента
   * @param content
   * @returns {ScModalService}
   */
  openCustom(content: IModal): ScModalService {
    const modalRef = this.ngModalOpen(content.component);
    content && content.params && this.addParamsToModal(modalRef, content.params);
    return this;
  }

  /**
   * Открытие стандартного пустого модального окна
   * @returns {ScModalService}
   */
  openDefault(): ScModalService {
    this.ngModalOpen(ScModalComponent);
    return this;
  }

  /**
   * Открытие модального окна со стандартным представлением, но указанными параметрами
   * @returns {ScModalService}
   */
  openSimple(params: IModalParams): ScModalService {
    this.ngModalOpen(ScModalComponent, params);
    return this;
  }

  /**
   * Добавляем параметры модальному окну
   * @param modalRef
   * @param params
   * @returns {ScModalService}
   */
  addParamsToModal(modalRef: any, params: IModalParams): ScModalService {
    Object.keys(params).forEach(param => {
      modalRef.componentInstance[param] = params[param];
    });
    return this;
  }

  /**
   * Вызов метода open компонента ng bootstrap model
   * @param component
   * @param params
   * @returns {any}
   */
  ngModalOpen(component: any, params: IModalParams = null): any {
    const modalRef = this.ngbModal.open(component);
    params && this.addParamsToModal(modalRef, params);
    return modalRef.result.then(this.closedCb.bind(null, params), this.dismissedCb.bind(null, params));
  }

  /**
   * Callback на закрытие
   * @param params
   * @param e
   * @returns {ScModalService}
   */
  closedCb(params: IModalParams = null, e: any): ScModalService {
    params && params.closeCallback && params.closeCallback(e);
    return this;
  }

  /**
   * Callback на отмену
   * @param params
   * @param e
   * @returns {ScModalService}
   */
  dismissedCb(params: IModalParams = null, e: any): ScModalService {
    params && params.dismissCallback && params.dismissCallback(e);
    return this;
  }
}
