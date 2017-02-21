import { Component, Input, Output, EventEmitter } from '@angular/core';

interface Iitem {
  title: string;
  icon?: string;
  mod?: string;
}

@Component({
  selector: 'sc-panel-tag',
  templateUrl: './sc-panel-tag.component.html',
  styleUrls: ['./sc-panel-tag.component.scss']
})
export class ScPanelTagComponent {
  /**
   * Массив объектов Iitem
   */
  @Input() tags?:Iitem[];

  /**
   * Генерируем собиытие удаления на которое можно подписаться из вне.
   */
  @Output() removeItem = new EventEmitter();

  constructor() { }

  /**
   * Удаление тага из входящего массива
   * @param  {Iitem} tag Удаляемый таг
   * @return {Iitem}     Удаленный таг
   */
  remove(tag:Iitem):Iitem {
    let position = this.tags.indexOf(tag);
    let removedItem = this.tags.splice(position, 1)[0];
    this.removeItem.emit(removedItem);

    return removedItem;
  }
}
