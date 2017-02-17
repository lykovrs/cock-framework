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

enum Mod {
  def=<any>'def',
  attention=<any>'attention',
  warning=<any>'warning'
}

@Component({
  selector: 'sc-checkbox',
  templateUrl: 'sc-checkbox.component.html',
  styleUrls: ['sc-checkbox.component.scss']
})

export class ScCheckboxComponent implements OnInit {

  Mod = Mod;

  @Input() model: boolean; //Модель
  @Input() label?: string; //Заголовок
  @Input() disabled?: boolean; //Disable
  @Input() name?: boolean; //Имя
  @Input() indeterminate?: boolean; //Установка смешанного значения
  @Input() mod?: Mod; //Мод: attention, warning, либо вообще не указывается (def)

  @Output() scChange = new EventEmitter(); //Получаем переданную функциию scChange

  constructor() {

  }

  ngOnInit() {
    this.initMod();
  }

  /**
   * Инициализируем mod
   */
  private initMod() {
    console.log(this.getMod());
    console.log(Mod.attention)
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
  private setMod(mod: Mod): ScCheckboxComponent {
    this.mod = mod;
    return this;
  }

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
