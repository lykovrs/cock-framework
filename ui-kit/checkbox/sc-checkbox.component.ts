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

export class CheckboxComponent implements OnInit {

  constructor() {

  }

  @Input() model: boolean; //Модель
  @Input() label?: string; //Заголовок
  @Input() disabled?: boolean; //Disable
  @Input() name?: boolean; //Имя
  @Input() indeterminate?: boolean; //Установка смешанного значения
  @Input() mod?: string; //Мод: attention, warning, либо вообще не указывается

  @Output() change = new EventEmitter(); //Получаем переданную функциию change

  ngOnInit() {}

  /**
   * Событие изменения checked
   */
  private changeModel(): void {
    this.model = !this.model;
    //Вызов функции change, переданной компоненту, на изменение модели
    this.onChangeParent();
  }

  /**
   * Получаем доступ к переданной компоненту функции onChange
   */
  private onChangeParent(): void {
    this.change.emit();
  }

}
