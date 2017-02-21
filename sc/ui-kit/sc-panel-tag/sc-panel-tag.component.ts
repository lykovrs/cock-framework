import { Component, Input, Output, EventEmitter } from '@angular/core';
import '../interfaces/ITag';

@Component({
  selector: 'sc-panel-tag',
  templateUrl: './sc-panel-tag.component.html',
  styleUrls: ['./sc-panel-tag.component.scss']
})
export class ScPanelTagComponent {
  /**
   * Массив объектов Iitem
   */
  @Input() tags?:ITag[];

  /**
   * Генерируем собиытие удаления на которое можно подписаться из вне.
   */
  @Output() removeItem = new EventEmitter();

  constructor() { }

  /**
   * Удаление тага из входящего массива
   * @param  {ITag} tag Удаляемый таг
   * @return {ITag}     Удаленный таг
   */
  removeTag(tag:ITag):ITag {
    let position = this.tags.indexOf(tag);
    let removedItem = this.tags.splice(position, 1)[0];
    this.removeItem.emit(removedItem);

    return removedItem;
  }
}
