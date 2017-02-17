import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  AfterViewInit
} from '@angular/core';

enum ColorType {
  teal=<any>'teal',
  light=<any>'light',
  grey=<any>'grey'
}

enum SizeType {
  normal=<any>'normal',
  lg=<any>'lg'
}

@Component({
  selector: 'sc-panel',
  templateUrl: 'sc-panel.component.html',
  styleUrls: ['sc-panel.component.scss']
})

export class ScPanelComponent implements AfterViewInit, OnInit  {

  @Input() iconUrl: string;
  @Input() title: string;
  @Input() colorType: ColorType; //Цветовая схема панели
  @Input() sizeType: SizeType; //Размер панели

  ColorType = ColorType;
  SizeType = SizeType;

  constructor() {

  }

  ngOnInit() {
    console.log(this.getIconUrl())
    this.initPanel();
    console.log(this.getIconUrl())
  }

  /**
   * Получаем iconUrl
   * @returns {string}
   */
  private getIconUrl(): string {
    return this.iconUrl;
  }

  /**
   * Задаем iconUrl
   * @returns {ScPanelComponent}
   */
  private setIronUrl(iconUrl: string): ScPanelComponent {
    this.iconUrl = iconUrl;
    return this;
  }

  /**
   * Инициализируем панель
   * @returns {ScPanelComponent}
   */
  initPanel(): ScPanelComponent {
    this.initColor().initSize();
    return this;
  }

  /**
   * Инициализируем цветовую схему панели
   */
  initColor(): ScPanelComponent {
    !this.getColorType() && this.setColorType(ColorType.teal);
    return this;
  }

  /**
   * Инициализируем размер панели
   */
  initSize(): ScPanelComponent {
    !this.getSizeType() && this.setSizeType(SizeType.normal);
    return this;
  }

  /**
   * Получаем цветовое оформление панели
   * @returns {ColorType}
   */
  getColorType(): ColorType {
    return this.colorType;
  }

  /**
   * Задаем цветовое оформление панели
   * @param colorType
   * @returns {ScPanelComponent}
   */
  setColorType(colorType: ColorType): ScPanelComponent {
    this.colorType = colorType;
    return this;
  }

  /**
   * Получаем размер кнопки
   * @returns {SizeType}
   */
  getSizeType(): SizeType {
    return this.sizeType;
  }

  /**
   * Задаем размер панели
   * @param sizeType
   * @returns {ScPanelComponent}
   */
  setSizeType(sizeType: SizeType): ScPanelComponent {
    this.sizeType = sizeType;
    return this;
  }

  ngAfterViewInit() {

  }
}
