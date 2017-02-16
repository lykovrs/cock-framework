import { Component, OnInit, ViewEncapsulation, ViewChild, Input, Output, HostBinding, Inject} from '@angular/core';

/**
 * Компонент стандартного текстового поля
 */
@Component({
  selector: 'sc-text-field',
  templateUrl: './sc-text-field.component.html',
  styleUrls: ['./sc-text-field.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    // "class": "adf"
  }
})

export class TextField implements OnInit {
  private focusElement:boolean = false;
  private _mask:any[] ;
  // Получаем поле из вью
  @ViewChild('myInput') myInput;


  constructor() {

  }

  ngOnInit() {
    console.log('mask', this.mask);
    console.log('_mask', this._mask);
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
   * Стандартная подсказка
   */
  @Input() placeholder?:string;

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
