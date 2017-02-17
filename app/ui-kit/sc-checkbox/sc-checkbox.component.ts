/**
 * Компонент checkbox
 */
import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit
} from '@angular/core';

@Component({
  selector: 'sc-checkbox',
  templateUrl: 'sc-checkbox.component.html',
  styleUrls: ['sc-checkbox.component.scss']
})

export class ScCheckboxComponent implements OnInit {

  constructor() {

  }

  @Input() model: boolean; //Модель
  @Input() label?: string; //Заголовок
  @Input() disabled?: boolean; //Disable
  @Input() name?: boolean; //Имя
  @Input() indeterminate?: boolean; //Установка смешанного значения
  @Input() mod?: string; //Мод: attention, warning, либо вообще не указывается

  @Output() scChange = new EventEmitter(); //Получаем переданную функциию scChange

  ngOnInit() {}

  /**
   * Событие изменения checked
   */
  private changeModel(): void {
    this.model = !this.model;
    //Вызов функции scChange, переданной компоненту, на изменение модели
    this.onChangeParent();
  }

  /**
   * Получаем доступ к переданной компоненту функции onChange
   */
  private onChangeParent(): void {
    this.scChange.emit();
  }

}
