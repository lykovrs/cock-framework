import { Component, OnInit, ViewEncapsulation, ViewChild, Input, Output, Inject} from '@angular/core';

/**
 * Компонент стандартного текстового поля
 */
@Component({
  selector: 'sc-text-field',
  templateUrl: './sc-text-field.component.html',
  styleUrls: ['./sc-text-field.component.scss'],
  encapsulation: ViewEncapsulation.None,

})

export class TextField implements OnInit {
  private focusElement:boolean = false;

  // Получаем поле из вью
  @ViewChild('myInput') myInput;


  constructor() {

  }

  ngOnInit() {

  }
  /**
   * Маска ввода для поля
   */
  @Input() mask?: any;
  /**
   * Модификаторы компонента
   */
  @Input() mod?:string;
  /**
   * Стандартная блокировка
   */
  @Input() disabled?:boolean;

  /**
   * Меняем состояние при потере фокуса полем
   * @param {[type]} e [description]
   */
  onBlur(e):void {
    this.focusElement = false;
  };

  /**
   * Меняем состояние при фокусе на поле
   * @param {[type]} e [description]
   */
  onFocus(e):void {
    this.focusElement = true;
  };
  /**
   * Устанавливаем фокус на поле
   */
  setFocus():void {
    this.myInput.nativeElement.focus();
  };
};
