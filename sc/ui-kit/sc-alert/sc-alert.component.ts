/**
 * Created by dkovalev on 06.03.2017.
 */
/**
 * Modules
 */
import {Component, OnInit, ViewEncapsulation } from '@angular/core';
/**
 * Services
 */
import { ScAlertService } from './sc-alert.service';
import { ScAlertOneService } from './sc-alert-one.service';

/**
 * Interfaces
 */
import { IScAlertOptionsButton } from './sc-alert.interfaces';

@Component({
  selector: 'sc-alert',
  templateUrl: './sc-alert.component.html',
  styleUrls: ['./sc-alert.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class ScAlertComponent implements OnInit {

  private alerts: Array<ScAlertOneService> = []; //Массив элементов оповещения

  constructor(
    private scAlertService: ScAlertService
  ) {

  }

  ngOnInit(): void {
    this.subscribeMessagesChange();
  }

  /**
   * Подписываемся на изменение сообщений
   * @returns {any}
   */
  private subscribeMessagesChange(): any {
    return this.scAlertService
      .getAlertAddEmitter()
      .subscribe((scAlertOne: ScAlertOneService) => this.setAlerts(scAlertOne).closeTimerAlert(scAlertOne));
  }

  /**
   * Задаем alerts
   * @param alertOne
   * @returns {ScAlertComponent}
   */
  private setAlerts(alertOne: ScAlertOneService): ScAlertComponent {
    this.alerts.push(alertOne);
    return this;
  }

  /**
   * Получаем alerts
   * @returns {Array<ScAlertService>}
   */
  private getAlerts(): Array<ScAlertOneService> {
    return this.alerts;
  }

  /**
   * Событие закрытие alert
   * @returns {ScAlertComponent}
   */
  private onCloseAlert(scAlertOne: ScAlertOneService, event): ScAlertComponent {
    event.preventDefault();
    this.closeAlert(scAlertOne);
    return this;
  }

  /**
   * Закрываем alert
   * @param scAlertOne
   * @returns {ScAlertComponent}
   */
  private closeAlert(scAlertOne: ScAlertOneService): ScAlertComponent {
    const index = this.alerts.indexOf(scAlertOne);
    this.alerts.splice(index, 1);
    return this;
  }

  /**
   * Закрываем alert по таймауту
   * @param scAlertOne
   * @returns {ScAlertComponent}
   */
  private closeTimerAlert(scAlertOne: ScAlertOneService): ScAlertComponent {
    scAlertOne.getOptionsAutoClose() &&
    scAlertOne.setTimer(
      setTimeout(() => this.closeAlert(scAlertOne), scAlertOne.getLifeTime())
    );
    return this;
  }

  /**
   * Событие mouseenter на alert
   * @param scAlertOne
   * @returns {ScAlertComponent}
   */
  private onMouseEnterAlert(scAlertOne: ScAlertOneService): ScAlertComponent {
    clearTimeout(scAlertOne.getTimer());
    return this;
  }

  /**
   * Событие mouseleave на alert
   * @param scAlertOne
   * @returns {ScAlertComponent}
   */
  private onMouseLeaveAlert(scAlertOne: ScAlertOneService): ScAlertComponent {
    this.closeTimerAlert(scAlertOne);
    return this;
  }

  /**
   * Калбек при нажатии на кнопки сообщения
   * @param button
   * @param scAlertOne
   * @returns {ScAlertComponent}
   */
  private callbackButton(button: IScAlertOptionsButton, scAlertOne: ScAlertOneService): ScAlertComponent {
    button.cb && button.cb();
    this.closeAlert(scAlertOne);
    return this;
  }
}

