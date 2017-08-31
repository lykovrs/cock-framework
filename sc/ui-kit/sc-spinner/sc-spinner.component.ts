import {Component, OnInit, Input } from '@angular/core';
import {ISpinnerOptions} from './sc-spinner.interface';

interface IDisableds {
  increment: boolean,
  decrement: boolean
}

@Component({
  selector: 'sc-spinner',
  templateUrl: './sc-spinner.component.html',
  styleUrls: ['./sc-spinner.component.scss']
})

export class ScSpinnerComponent implements OnInit {

  @Input() options: ISpinnerOptions = null;

  private value: number = 0;
  private step: number = 0; // шаг для valuesFixedStep
  private disableds: IDisableds = {
    increment: false,
    decrement: false
  };
  private toFixed: number = 0;

  constructor() {}

  // Инициализация. Указываем значение по умолчанию
  ngOnInit() {
    if(this.check()) {
      this.value = this.options.values ? this.options.values.min : this.options.valuesFixed[0];
      this.decrement(); // Вызываем метод для проверки disabled на кнопках
      this.checkFloat(); // Проверка необходимости фиксирования длины для типа Float
    }
  }

  // Следующее значение
  private increment (): void {
    this.cover(
      (indicium: number) => this.step + indicium < this.options.valuesFixed.length && this.updateValuesFixed(indicium),
      (value) => this.setValue((value > this.options.values.max) ? this.value : value),
      1
    );
  }

  // Предыдущее значение
  private decrement (): void {
    this.cover(
      (indicium: number) => this.step + indicium >= 0 && this.updateValuesFixed(indicium),
      (value) => this.setValue((value < this.options.values.min) ? this.value : value),
      -1
    );
  }

  // Обертка для однотипных действий инкремента/декремента
  private cover (valuesFixedFunc: Function, valuesFunc: Function, indicium ?: number) {
    if (this.check()) { // Проверка правильности данных
      if(this.options.valuesFixed) { // Фиксированные значения
        valuesFixedFunc(indicium);
        this.setDisabled(this.step + 1 == this.options.valuesFixed.length, !this.step);
      }
      else { // Структура
        valuesFunc(this.value + this.options.values.step*indicium);
        this.setDisabled(this.value + this.options.values.step > this.options.values.max,
                        this.value - this.options.values.step < this.options.values.min);
      }
    }
  }

  private setDisabled (increment: boolean, decrement: boolean): void {
    this.disableds = {
      increment: increment,
      decrement: decrement
    };
  }

  // Обновляем значения шаг для valuesFixed
  private updateValuesFixed (indicium: number): void {
    this.step += indicium;
    this.setValue(this.options.valuesFixed[this.step]);
  }

  // Обновляем значение в поле счетчика
  private setValue (value: number): void {
    this.value = this.toFixed ? parseFloat(value.toFixed(this.toFixed)) : value;
  }

  // Проверка корректности переданных параметров
  private check (): boolean {
    return Boolean(this.options.values || this.options.valuesFixed);
  }

  // Проверка необходимости фиксирования длины
  // Пример: var a = 0.01; a + 0.25 - 0.25; Итог: 0.010000000000000009 (особенности вычисления)
  private checkFloat () {
    if(this.options.values) {
      for (let i in this.options.values) {
        let item = this.options.values[i],
          fixed: number = item.toString().indexOf('.') !== -1 ? item.toString().split('.')[1].length : 0;
        if(fixed > this.toFixed) {
          this.toFixed = fixed;
        }
      }
    }
  }
}
