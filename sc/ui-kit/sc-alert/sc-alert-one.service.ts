/**
 * Created by dkovalev on 07.03.2017.
 */
/**
 * Modules
 */
import { Injectable } from "@angular/core";

/**
 * Interfaces
 */
import {IScAlertOptions, IScAlertOptionsButton} from './sc-alert.interfaces';

@Injectable()
export class ScAlertOneService {

  //Константы
  private TYPE_DEFAULT: string = 'success'; //Тип сообщения по умолчанию
  private LIFE_TIME: number = 5000; //Время жизни alert по умолчанию

  public messages: Array<string> = []; //Сообщения
  public type: string = this.TYPE_DEFAULT; //Тип alert
  public timer: any; //Здесь храним таймер

  //options
  public title: string = ''; //Заголовок
  public buttons: Array<IScAlertOptionsButton>; //Кнопки
  public autoClose: boolean = true; //Параметр автозакрытия alert
  public lifeTime: number = this.LIFE_TIME; //Время жизни alert

  constructor() {}

  /**
   * Задаем сообщения
   * @param messages
   * @returns {ScAlertOneService}
   */
  public setMessages(messages: string | Array<string>): ScAlertOneService {
    if (typeof messages === 'string') {
      messages && this.messages.push(messages)
    } else if (Array.isArray(messages)) {
      messages && messages.length && (this.messages = messages);
    }
    return this;
  }

  /**
   * Получаем сообщения
   * @returns {ScAlertOneService}
   */
  public getMessages(): ScAlertOneService {
    return this;
  }

  /**
   * Задаем тип сообщения
   * @param type
   * @returns {ScAlertOneService}
   */
  public setType(type: string): ScAlertOneService {
    this.type = type || this.TYPE_DEFAULT;
    return this;
  }

  /**
   * Получаем тип сообщения
   * @returns {string}
   */
  public getType(): string {
    return this.type;
  }


  /**
   * Получаем время показа alert
   * @returns {number}
   */
  public getLifeTime(): number {
    return this.lifeTime;
  }

  /**
   * Задаем время показа alert
   * @param lifeTime
   * @returns {ScAlertOneService}
   */
  public setLifeTime(lifeTime: number): ScAlertOneService{
    this.lifeTime = lifeTime;
    return this;
  }

  /**
   * Получаем таймер удаления alert
   * @returns {any}
   */
  public getTimer(): number {
    return this.timer;
  }

  /**
   * Задаем таймер удаления alert
   * @param timer
   * @returns {ScAlertOneService}
   */
  public setTimer(timer: any): ScAlertOneService {
    this.timer = timer;
    return this;
  }

  /**
   * Задаем дополнительные опции для alert
   * @param options
   * @returns {ScAlertOneService}
   */
  public setOptions(options: IScAlertOptions): ScAlertOneService {
    options &&
    this.setOptionsTitle(options.title)
        .setOptionsButtons(options.buttons)
        .setOptionsAutoClose(options.autoClose)
        .setOptionsLifeTime(options.lifeTime);
    return this;
  }

  /**
   * Задаем заголовок
   * @param title
   * @returns {ScAlertOneService}
   */
  public setOptionsTitle(title: string): ScAlertOneService {
    title && (this.title = title);
    return this;
  }

  /**
   * Получаем заголовок
   * @returns {string}
   */
  public getOptionsTitle(): string {
    return this.title;
  }

  /**
   * Задаем кнопки
   * @param buttons
   * @returns {ScAlertOneService}
   */
  public setOptionsButtons(buttons: Array<IScAlertOptionsButton>): ScAlertOneService {
    buttons && (this.buttons = buttons);
    return this;
  }

  /**
   * Получаем кнопки
   * @returns {Array<string>}
   */
  public getOptionsButtons(): Array<IScAlertOptionsButton> {
    return this.buttons;
  }

  /**
   * Получаем параметр автозакрытия
   * @returns {boolean}
   */
  public getOptionsAutoClose(): boolean {
    return this.autoClose;
  }

  /**
   * Задаем параметр автозакрытия
   * @param autoClose
   * @returns {ScAlertOneService}
   */
  public setOptionsAutoClose(autoClose: boolean): ScAlertOneService {
    this.autoClose = autoClose != false;
    return this;
  }

  /**
   * Получаем lifeTime
   * @returns {number}
   */
  public getOptionsLifeTime(): number {
    return this.lifeTime;
  }

  /**
   * Задаем lifeTime
   * @param lifeTime
   * @returns {ScAlertOneService}
   */
  public setOptionsLifeTime(lifeTime: number): ScAlertOneService {
    this.lifeTime = lifeTime ? lifeTime : this.LIFE_TIME;
    return this;
  }

}
