import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  AfterViewInit,
    ViewEncapsulation
} from '@angular/core';
import {ScRadioService} from './sc-radio.service';

enum Mod {
    def=<any>'def',
    attention=<any>'attention',
    warning=<any>'warning',
    onDark=<any>'onDark',
    onDarkWarning=<any>'onDarkWarning',
    onDarkAttention=<any>'onDarkAttention',
}

@Component({
  selector: 'sc-radio',
  templateUrl: 'sc-radio.component.html',
  styleUrls: ['sc-radio.component.scss'],
    encapsulation: ViewEncapsulation.None,
})

export class ScRadioComponent implements AfterViewInit, OnInit  {

  Mod = Mod;

  @Input() label?: string; //Заголовок
  @Input() disabled?: boolean; //Disable
  @Input() name: string; //Имя
  @Input() value: any; //Значение radio button
  @Input() mod?: Mod; //Мод: attention, warning, либо вообще не указывается
  @Input() model: string; //Выбранное значение

  @Output() scChange = new EventEmitter(); //Получаем переданную функциию scChange

  constructor() {
  }

  ngOnInit() {
    this.initMod();
  }

  ngAfterViewInit() {
    this.subscribeChangeValue();
  }

  /**
   * Инициализируем mod
   */
  private initMod() {
    !this.getMod() && this.setMod(Mod.def);
  }

  /**
   * Получаем mod
   * @returns {Mod}
   */
  private getMod(): Mod {
    return this.mod;
  }

  /**
   * Задаем mod
   * @param mod
   * @returns {ScRadioComponent}
   */
  private setMod(mod: Mod): ScRadioComponent {
    this.mod = mod;
    return this;
  }

  /**
   * Подписка на изменение value
   */
  private subscribeChangeValue(): void {
    ScRadioService
      .get(this.getName())
      .subscribe(value => {
        this.setModel(value);
      });
  }

  /**
   * Задаем radio атрибут name
   * @param name
   * @returns {ScRadioComponent}
   */
  private setName(name: string): ScRadioComponent {
    this.name = name ? name : this.name;
    return this;
  }

  /**
   * Получаем name
   * @returns {string}
   */
  private getName(): string {
    return this.name;
  }

  /**
   * Получаем model
   * @returns {string}
   */
  private getModel(): string {
    return this.model;
  }

  /**
   * Задаем model
   * @param model
   * @returns {ScRadioComponent}
   */
  private setModel(model: string): ScRadioComponent {
    this.model = model;
    return this;
  }

  /**
   * Получаем value
   * @returns {any}
   */
  private getValue(): string {
    return this.value;
  }

  /**
   * Задаем value
   * @param value
   * @returns {ScRadioComponent}
   */
  private setValue(value: string): ScRadioComponent {
    this.value = value;
    return this;
  }

  /**
   * Событие изменения checked
   */
  private changeModel(e): void {
    e.preventDefault();
    e.stopPropagation();
    ScRadioService.get(this.getName()).emit(this.getValue());
    this.onScChange();
  }

  /**
   * CB на изменение
   */
  private onScChange(): void {
    this.scChange.emit();
  }

}
