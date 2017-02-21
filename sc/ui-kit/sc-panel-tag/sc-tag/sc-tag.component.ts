import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import '../../interfaces/ITag'



@Component({
  selector: 'sc-tag',
  templateUrl: './sc-tag.component.html',
  styleUrls: ['./sc-tag.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ScTagComponent {

  constructor() {
  }

  /**
   * Заголовок тага
   */
  @Input() tag: ITag;

  /**
   * Выбрасываем наверх событие клика по кнопке закрытия тага
   */
  @Output() onRemove:EventEmitter<ITag> = new EventEmitter<ITag>();

  /**
   * Метод закрытия тага
   * @param {MouseEvent} e Событие клика по кнопке закрытия
   */
  remove(e):void {
    this.onRemove.emit(this.tag);
  }

}
