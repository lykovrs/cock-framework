/**
 * Created by dkovalev on 07.03.2017.
 */
/**
 * Modules
 */
import { Injectable, EventEmitter} from "@angular/core";

/**
 * Services
 */
import { ScAlertOneService } from './sc-alert-one.service';

/**
 * Interfaces
 */
import { IScAlertOptions } from './sc-alert.interfaces';

@Injectable()
export class ScAlertService {

  private alerts: Array<ScAlertOneService> = []; //Набор alert
  private alertAdd: EventEmitter<any> = new EventEmitter(); //EventEmitter добавленного сообщения

  constructor() {}

  /**
   * Показываем alert
   * @param messages
   * @param type
   * @param options
   * @returns {ScAlertService}
   */
  public show(messages: string | Array<string>, type?: string, options?: IScAlertOptions): ScAlertService {
    let alertOne: ScAlertOneService = new ScAlertOneService()
      .setMessages(messages)
      .setType(type)
      .setOptions(options);

    alertOne.messages && alertOne.messages.length && this.addAlert(alertOne).emitAddAlert(alertOne);

    return this;
  }

  /**
   * Метод для отображения уведомления об успешном выполнении операции
   * @param messages
   * @param options
   * @returns {ScAlertService}
   */
  public success(messages: string | Array<string>, options?: IScAlertOptions): ScAlertService {
    return this.show(messages, 'success', options);
  }

  /**
   * Метод для отображения информационного уведомления
   * @param messages
   * @param options
   * @returns {ScAlertService}
   */
  public info(messages: string | Array<string>, options?: IScAlertOptions): ScAlertService {
    return this.show(messages, 'info', options);
  }

  /**
   * Метод для отображения уведомления-предупреждения
   * @param messages
   * @param options
   * @returns {ScAlertService}
   */
  public warning(messages: string | Array<string>, options?: IScAlertOptions): ScAlertService {
    return this.show(messages, 'warning', options);
  }

  /**
   * Метод для отображения уведомления об опасности
   * @param messages
   * @param options
   * @returns {ScAlertService}
   */
  public danger(messages: string | Array<string>, options?: IScAlertOptions): ScAlertService {
    return this.show(messages, 'danger', options);
  }

  /**
   * Делаем emit на изменение alert
   * @param alertOne
   * @returns {ScAlertService}
   */
  private emitAddAlert(alertOne: ScAlertOneService ): ScAlertService {
    this.alertAdd.emit(alertOne);
    return this;
  }

  /**
   * Получаем EventEmitter
   * @returns {EventEmitter<any>}
   */
  public getAlertAddEmitter(): EventEmitter<any> {
    return this.alertAdd;
  }

  /**
   * Добавляем новый alert
   * @param alertOne
   * @returns {ScAlertService}
   */
  private addAlert(alertOne: ScAlertOneService ): ScAlertService {
    this.alerts.push(alertOne);
    return this;
  }
}
