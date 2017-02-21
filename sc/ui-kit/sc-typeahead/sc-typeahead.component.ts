/**
 * Created by dkovalev on 20.02.2017.
 */
import {Component, OnInit, Input, ViewEncapsulation} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';

import { ScTypeaheadService } from './sc-typeahead.service';

//TODO вынести в один интерфейс
export interface ITypeaheadParam {
  placeholder?: string,
  disabled?: boolean,
  searching?: boolean,
  searchMinLength?: number,
  states: Array<any>,
  searchLoading?: number
}

enum Mod {
  def=<any>'def',
  attention=<any>'attention',
  warning=<any>'warning'
}

@Component({
  selector: 'sc-typeahead',
  templateUrl: './sc-typeahead.component.html',
  styleUrls: ['./sc-typeahead.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ScTypeaheadComponent implements OnInit {

  constructor(private scTypeaheadService: ScTypeaheadService) {

  }

  ngOnInit() {
    //TODO для теста
    this.list = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
      'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
      'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
      'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
      'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
      'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
      'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
      'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
    this.initMod();
  }

  Mod = Mod;
  private findResults: Array<any> = []; //Найденные совпадения
  private searching: boolean = false; //Процесс поиска (идет - true, нет - false)
  private isFocused: boolean = false; //Находится ли input в фокусе

  @Input() disabled?: boolean; //Disabled поля ввода
  @Input() placeholder?: string; //Placeholder поля ввода
  @Input() model: any; //Моделька, содержащее значение поиска
  @Input() mod?: Mod; //Мод: attention, warning, либо вообще не указывается (def)

  @Input() list: Array<any> = []; //Данные для фильтрации
  @Input() searchMinLength?: any = 3; //Начинаем фильтрацию после данного количества символов
  @Input() searchLoading?: number = 0; //Задержка перед фильтрацией

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
  private setMod(mod: Mod): ScTypeaheadComponent {
    this.mod = mod;
    return this;
  }

  /**
   * Поиск совпадений
   * @param $event
   * @returns {Observable<any>}
   */
  private search($event): Observable<any> {
    return this.scTypeaheadService.search(this.getParam(), $event)
      .do((items) => {
        this.findResults = items;
      });
  }

  /**
   * Получаем параметры поиска
   * @returns {any}
   */
  private getParam(): ITypeaheadParam {
    return {
      placeholder: this.getPlaceholder(),
      disabled: this.getDisabled(),
      searching: this.getSearching(),
      searchMinLength: this.getSearchMinLength(),
      states: this.getList(),
      searchLoading: this.getSearchLoading()
    }
  }

  /**
   * Задаем placeholder
   * @param placeholder
   * @returns {ScTypeaheadComponent}
   */
  private setPlaceholder(placeholder: string): ScTypeaheadComponent {
    this.placeholder = placeholder;
    return this;
  }

  /**
   * Получаем placeholder
   * @returns {string}
   */
  private getPlaceholder(): string {
    return this.placeholder;
  }

  /**
   * Задаем disabled для input
   * @param disabled
   * @returns {ScTypeaheadComponent}
   */
  private setDisabled(disabled: boolean): ScTypeaheadComponent {
    this.disabled = disabled;
    return this;
  }

  /**
   * Получем disabled у input
   * @returns {boolean}
   */
  private getDisabled(): boolean {
    return this.disabled;
  }

  /**
   * Задаем минимальную длину введенных символов, после которых начинаем фильтрацию
   * @param searchMinLength
   * @returns {ScTypeaheadComponent}
   */
  private setSearchMinLength(searchMinLength: number): ScTypeaheadComponent {
    this.searchMinLength = searchMinLength;
    return this;
  }

  /**
   * Получаем минимальную длину введенных символов, после которых начинаем фильтрацию
   * @returns {any}
   */
  private getSearchMinLength(): number {
    return this.searchMinLength;
  }

  /**
   * Задаем данные для фильтрации
   * @param list
   * @returns {ScTypeaheadComponent}
   */
  private setList(list: Array<any>): ScTypeaheadComponent{
    this.list = list;
    return this;
  }

  /**
   * Получаем данные для фильтрации
   * @returns {any[]}
   */
  private getList(): Array<any> {
    return this.list.slice();
  }

  /**
   * Получаем задержку перед фильтрацией
   * @returns {any}
   */
  private getSearchLoading(): number {
    return this.searchLoading;
  }

  /**
   * Задаем задержку перед фильтрацией
   * @param searchLoading
   * @returns {ScTypeaheadComponent}
   */
  private setSearchLoading(searchLoading: number): ScTypeaheadComponent {
    this.searchLoading = searchLoading;
    return this;
  }

  /**
   * Задаем searching
   * @param searching
   * @returns {ScTypeaheadComponent}
   */
  private setSearching(searching: boolean): ScTypeaheadComponent{
    this.searching = searching;
    return this;
  }

  /**
   * Получаем searching
   * @returns {boolean}
   */
  private getSearching(): boolean {
    return this.searching;
  }

  /**
   * Получаем isFocused
   * @returns {boolean}
   */
  private getIsFocused(): boolean {
    return this.isFocused;
  }

  /**
   * Задаем isFocused
   * @param isFocused
   * @returns {ScTypeaheadComponent}
   */
  private setIsFocused(isFocused: boolean): ScTypeaheadComponent {
    this.isFocused = isFocused;
    return this;
  }

  /**
   * Событие фокуса input
   */
  private onFocusInput(): void {
    this.setIsFocused(true);
  }

  /**
   * Событие потери фокуса input
   */
  private onBlurInput(): void {
    this.setIsFocused(false);
  }
}
