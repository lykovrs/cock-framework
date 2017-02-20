/**
 * Created by dkovalev on 20.02.2017.
 */
import {Component, OnInit, Input} from '@angular/core';
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

@Component({
  selector: 'sc-typeahead',
  templateUrl: './sc-typeahead.component.html',
  styleUrls: ['./sc-typeahead.component.scss']
})
export class ScTypeaheadComponent implements OnInit {

  constructor(private scTypeaheadService: ScTypeaheadService) {

  }

  ngOnInit() {
    //TODO для теста
    this.states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
      'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
      'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
      'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
      'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
      'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
      'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
      'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
  }

  private findResults: Array<any> = []; //Найденные совпадения
  private searching: boolean = false; //Процесс поиска (идет - true, нет - false)
  private param: any = {};

  @Input() disabled?: boolean; //Disabled поля ввода
  @Input() placeholder?: string; //Placeholder поля ввода
  @Input() model: any; //Моделька, содержащее значение поиска

  @Input() states: Array<any> = []; //Данные для фильтрации
  @Input() searchMinLength?: any = 1; //Начинаем фильтрацию после данного количества символов
  @Input() searchLoading?: number = 0; //Задержка перед фильтрацией

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
      states: this.getStates(),
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
   * @param states
   * @returns {ScTypeaheadComponent}
   */
  private setStates(states: Array<any>): ScTypeaheadComponent{
    this.states = states;
    return this;
  }

  /**
   * Получаем данные для фильтрации
   * @returns {any[]}
   */
  private getStates(): Array<any> {
    return this.states.slice();
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

  private setSearching(searching: boolean): ScTypeaheadComponent{
    this.searching = searching;
    return this;
  }

  private getSearching(): boolean {
    return this.searching;
  }
}
