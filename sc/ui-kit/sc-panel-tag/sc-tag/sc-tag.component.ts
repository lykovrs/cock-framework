import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sc-tag',
  templateUrl: './sc-tag.component.html',
  styleUrls: ['./sc-tag.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ScTagComponent {

  constructor() { }

  /**
   * Заголовок тага
   */
  @Input() title: string;

  /**
   * Путь до иконки
   */

  @Input() icon?: string;
  /**
   * Выбрасываем наверх событие клика по кнопке закрытия тага
   */

  @Output() onRemove = new EventEmitter();

  /**
   * Метод закрытия тага
   * @param {MouseEvent} e Событие клика по кнопке закрытия
   */
  remove(e):void {
    this.onRemove.emit(e);
  }

}
