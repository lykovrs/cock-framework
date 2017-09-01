/**
 * Modules
 */
import {Component, Input, ViewEncapsulation, ElementRef, Renderer, forwardRef} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {NgbTypeaheadConfig} from '@ng-bootstrap/ng-bootstrap'
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';

/**
 * Services
 */
import { ScTypeaheadService } from './sc-typeahead.service';

/**
 * Interfaces
 */
import { ITypeaheadParam } from './sc-typeahead.interfaces';

const noop = () => {};

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => _ScTypeaheadComponent),
  multi: true
};

enum Mod {
  def=<any>'def',
  attention=<any>'attention',
  warning=<any>'warning'
}

enum KeyCodes {
  up = 38,
  down = 40
}

@Component({
  selector: 'sc-typeahead',
  templateUrl: './sc-typeahead.component.html',
  styleUrls: ['./sc-typeahead.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR, NgbTypeaheadConfig]
})
export class _ScTypeaheadComponent implements ControlValueAccessor {

  //Enum Mod
  Mod = Mod;

  private findResults: Array<any> = []; //Найденные совпадения
  private searching: boolean = false; //Процесс поиска (идет - true, нет - false)
  private isFocused: boolean = false; //Находится ли input в фокусе
  private templateKeys: Array<string> = []; //Ключи объекта из переданного data

  //Dom элементы (нужны для динамического ограничения размера контейнера)
  private nativeElementDropDownMenu: HTMLElement = null;
  private nativeElementDropDownItem: any = null;
  private heightNativeElementDropDownItem: number = null;
  private maxHeightNativeElementDropDownMenu: number = null;

  //Внутренняя модель данных
  private innerValue: any = '';
  //Вызываются позже Control Value Accessor
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  /**
   * Заданные свойства
   */
  @Input() disabled?: boolean = false; //Disabled поля ввода
  @Input() placeholder?: string = 'Введите значение'; //Placeholder поля ввода
  @Input() mod?: Mod = Mod.def; //Мод: attention, warning, либо вообще не указывается (def)
  @Input() maxDropDownLength?: number = 20; //Максимальный размер выпадающего списка с найденными элементами
  @Input() data: any = []; //Переданные данные (Либо массив объектов, либо callback функция)
  @Input() customTemplate: string = ''; //Кастомизированный шаблон


  /**
   * Внутренние свойства typeahead
   * @type {number}
   */
  @Input() searchMinLength?: any = 3; //Начинаем фильтрацию после данного количества символов
  @Input() searchWaitLoading?: number = 300; //Задержка перед фильтрацией (Чтобы облегчить нагрузку на поисковик)
  @Input() showHint?: boolean = false; //Показывать подсказку при вводе значения
  @Input() focusFirst?: boolean = false;
  @Input() editable?: boolean = false;
  @Input() valuesFormatter?: (any) => any = null; //Формат вывода данных в выпадающем списке
  @Input() inputFormatter?: (any) => any = this.getInputFormatter(); //Формат вывода данных в поле ввода

  constructor(
    private scTypeaheadService: ScTypeaheadService,
    private config: NgbTypeaheadConfig,
    private elementRef: ElementRef,
    private renderer: Renderer
  ) {

  }

  /**
   * Создаем templateKeys
   * @param items
   * @returns {_ScTypeaheadComponent}
   */
  initTemplateKeys(items: Array<any>): _ScTypeaheadComponent {
    this.templateKeys = items && items.length && this.valuesFormatter !== null
      ? Object.keys(this.valuesFormatter(Object.assign({}, items[0])))
      : [];
    return this;
  }

  /**
   * Callback на выбор элемента
   * @param e
   */
  private onSelectItem(e): void {

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
  private setMod(mod: Mod): _ScTypeaheadComponent {
    this.mod = mod;
    return this;
  }

  /**
   * Поиск совпадений
   * @param $event
   * @returns {Observable<any>}
   */
  private search($event): Observable<any> {
    return this.callServiceSearch($event)
      .do((items) => {
        Array.isArray(items)
          && this.setFindResults(items)
            .initTemplateKeys(items)
            .searchAfterDo();
      });
  }

  /**
   * Вызываем методы поиска совпадений из сервиса
   * @param $event
   * @returns {Observable<any>}
   */
  private callServiceSearch($event): Observable<any> {
    return Array.isArray(this.getData()) ? this.searchStaticData($event) : this.searchHttpData($event);
  }

  /**
   * Поиск статичных данных (передача data в атрибуте как массив)
   * @param $event
   * @returns {Observable<any>}
   */
  private searchStaticData($event): Observable<any> {
    return this.valuesFormatter
      ? this.scTypeaheadService.searchComplex(this.getParam(), this.valuesFormatter, $event)
      : this.scTypeaheadService.searchSimple(this.getParam(), $event);
  }

  /**
   * Поиск данных по запросу (передача data в атрибуте как callback)
   * @param $event
   * @returns {Observable<any>}
   */
  private searchHttpData($event): Observable<any> {
    return typeof this.getData() === 'function'
      ? this.scTypeaheadService.searchHttp(this.getParam(), $event)
      : Observable.of([]);
  }

  /**
   * После запроса работаем с представлением, задаем максимальные размеры контейнера
   */
  private searchAfterDo(): void {
    //Задаем максимальные размеры контейнера
    setTimeout(() => {
      let nativeElementTypeaheadMenu = this.elementRef.nativeElement.querySelector('ngb-typeahead-window');
      nativeElementTypeaheadMenu &&
      this.setNativeElementDropDownMenu(nativeElementTypeaheadMenu)
        .setNativeElementDropDownItem(this.nativeElementDropDownMenu.querySelector('.dropdown-item'))
        .setHeightNativeElementDropDownItem(this.nativeElementDropDownItem.offsetHeight)
        .setMaxHeightDropDownMenu(this.heightNativeElementDropDownItem, this.maxDropDownLength)
        .setStyleNativeElementDropDownMenu('maxHeight', this.maxHeightNativeElementDropDownMenu + 'px')
        .setStyleNativeElementDropDownMenu('visibility', 'visible'); //Необходимо, чтобы на экране не
      //не передергивался drop-down
    }, 1);
  }

  /**
   * Очищаем поле ввода
   * @param scInput
   * @returns {_ScTypeaheadComponent}
   */
  private onClearInput(scInput: HTMLInputElement): _ScTypeaheadComponent {
    this.model = null;
    this.setFindResults([]);
    setTimeout(() => {scInput.value = '';});
    return this;
  }

  /**
   * Возвращаем formatter
   * @returns {string}
   */
  private getInputFormatter(): (any) => any {
    return this.getData() && this.getData().length ? this.getFirstDataKeyIfDataTrue(this.getData()) : null;
  }

  /**
   * Если тип первого элемент переданного массива не строка, то возвращаем callback, который в свою очередь
   * возвращает значение из **первого** ключа первого объекта переданного массива данных
   * @param data
   * @returns {string}
   */
  private getFirstDataKeyIfDataTrue(data): (any) => any {
    return typeof data[0] === 'string' ? null : this.getFirstDataObjectKey(data);
  }

  /**
   * Получаем значение из **первого** ключа первого объекта переданного массива данных
   * @param data
   * @returns {string}
   */
  private getFirstDataObjectKey(data): ()=> any {
    return () => data[0][Object.keys(Object.assign({}, data[0]))[0]];
  }

  /**
   * Получаем параметры поиска
   * @returns {ITypeaheadParam}
   */
  private getParam(): ITypeaheadParam {
    return {
      placeholder: this.getPlaceholder(),
      disabled: this.getDisabled(),
      searching: this.getSearching(),
      searchMinLength: this.getSearchMinLength(),
      data: this.getData(),
      searchWaitLoading: this.getSearchWaitLoading()
    }
  }

  /**
   * Задаем placeholder
   * @param placeholder
   * @returns {_ScTypeaheadComponent}
   */
  private setPlaceholder(placeholder: string): _ScTypeaheadComponent {
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
   * @returns {_ScTypeaheadComponent}
   */
  private setDisabled(disabled: boolean): _ScTypeaheadComponent {
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
   * @returns {_ScTypeaheadComponent}
   */
  private setSearchMinLength(searchMinLength: number): _ScTypeaheadComponent {
    this.searchMinLength = searchMinLength;
    return this;
  }

  /**
   * Получаем минимальную длину введенных символов, после которых начинаем фильтрацию
   * @returns {number}
   */
  private getSearchMinLength(): number {
    return this.searchMinLength;
  }

  /**
   * Получаем задержку перед фильтрацией
   * @returns {number}
   */
  private getSearchWaitLoading(): number {
    return this.searchWaitLoading;
  }

  /**
   * Задаем задержку перед фильтрацией
   * @param searchLoading
   * @returns {_ScTypeaheadComponent}
   */
  private setSearchWaitLoading(searchLoading: number): _ScTypeaheadComponent {
    this.searchWaitLoading = searchLoading;
    return this;
  }

  /**
   * Задаем searching
   * @param searching
   * @returns {_ScTypeaheadComponent}
   */
  private setSearching(searching: boolean): _ScTypeaheadComponent{
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
   * @returns {_ScTypeaheadComponent}
   */
  private setIsFocused(isFocused: boolean): _ScTypeaheadComponent {
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

  /**
   * Получаем showHint
   * @returns {boolean}
   */
  private getShowHint(): boolean {
    return this.showHint;
  }

  /**
   * Задать showHint
   * @param showHint
   * @returns {_ScTypeaheadComponent}
   */
  private setShowHint(showHint: boolean): _ScTypeaheadComponent {
    this.showHint = showHint;
    this.config.showHint = showHint;
    return this;
  }

  /**
   * Получить focusFirst
   * @returns {boolean}
   */
  private getFocusFirst(): boolean {
    return this.focusFirst;
  }

  /**
   * Задать focusFirst
   * @returns {_ScTypeaheadComponent}
   */
  private setFocusFirst(focusFirst: boolean): _ScTypeaheadComponent{
    this.focusFirst = focusFirst;
    this.config.focusFirst = focusFirst;
    return this;
  }

  /**
   * Получаем editable
   * @returns {boolean}
   */
  private getEditable(): boolean {
    return this.editable;
  }

  /**
   * Задаем editable
   * @param editable
   * @returns {_ScTypeaheadComponent}
   */
  private setEditable(editable: boolean): _ScTypeaheadComponent {
    this.editable = editable;
    this.config.editable = editable;
    return this;
  }

  /**
   * Получаем переданный массив для фильтрации
   * @returns {Array<any>}
   */
  private getData(): any {
    return this.data;
  }

  /**
   * Получаем maxDropDownLength
   * @returns {number}
   */
  private getMaxDropDownLength(): number {
    return this.maxDropDownLength;
  }

  /**
   * Задаем maxDropDownLength
   * @param maxDropDownLength
   * @returns {_ScTypeaheadComponent}
   */
  private setmaxDropDownLength(maxDropDownLength: number): _ScTypeaheadComponent {
    this.maxDropDownLength = maxDropDownLength;
    return this;
  }

  /**
   * Получаем nativeElementDropDown
   * @returns {any}
   */
  private getNativeElementDropDownMenu(): HTMLElement {
    return this.nativeElementDropDownMenu;
  }

  /**
   * Задаем nativeElementDropDownMenu
   * @param nativeElementDropDownMenu
   * @returns {_ScTypeaheadComponent}
   */
  private setNativeElementDropDownMenu(nativeElementDropDownMenu: any): _ScTypeaheadComponent {
    this.nativeElementDropDownMenu = nativeElementDropDownMenu;
    return this;
  }

  /**
   * Задаем стили dom элементу nativeElementDropDownMenu
   * @param prop
   * @param value
   * @returns {_ScTypeaheadComponent}
   */
  private setStyleNativeElementDropDownMenu(prop, value): _ScTypeaheadComponent {
    this.renderer.setElementStyle(this.nativeElementDropDownMenu, prop, value);
    return this;
  }

  private setMaxHeightDropDownMenu(heightDropDownItem: number, maxDropDownLength: number): _ScTypeaheadComponent {
    this.maxHeightNativeElementDropDownMenu = heightDropDownItem * maxDropDownLength;
    return this;
  }

  /**
   * Получаем nativeElementDropDownItem
   * @returns {any}
   */
  private getNativeElementDropDownItem() {
    return this.nativeElementDropDownItem;
  }

  /**
   * Задаем nativeElementDropDownItem
   * @param nativeElementDropDownItem
   * @returns {_ScTypeaheadComponent}
   */
  private setNativeElementDropDownItem(nativeElementDropDownItem: any): _ScTypeaheadComponent {
    this.nativeElementDropDownItem = nativeElementDropDownItem;
    return this;
  }

  /**
   * Задаем heightNativeElementDropDownItem
   * @param height
   * @returns {_ScTypeaheadComponent}
   */
  private setHeightNativeElementDropDownItem(height: number): _ScTypeaheadComponent {
    this.heightNativeElementDropDownItem = height;
    return this;
  }

  /**
   * Получаем heightNativeElementDropDownItem
   * @returns {number}
   */
  private getHeightNativeElementDropDownItem(): number {
    return this.heightNativeElementDropDownItem;
  }

  /**
   * ControlValueAccessor interface
   * @param val
   */
  writeValue(val: any) {
    if (val !== this.model) {
      this.model = val;
    }
  }

  /**
   * ControlValueAccessor interface
   * @param  {any}    fn [description]
   */
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  /**
   * ControlValueAccessor interface
   * @param  {any}    fn [description]
   */
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

  /**
   * Получаем accessor
   */
  get model(): any {
    return this.innerValue;
  };

  /**
   * Задаем accessor, который вызывает onChangeCallback
   * @param v
   */
  set model(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCallback(v);
    }
  }

  /**
   * Проверяем нахождение введенного слова в объекте поиска
   * @param result
   * @param term
   * @returns {string[]}
   */
  private ngbHighlightArray(result: string, term: string): Array<string> {
    let resultLc: string = result.toLowerCase(),
        currentIndex: number = 0;
    try {
      return resultLc.split(new RegExp(`(${term.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')})`)).map((part) => {
        const originalPart = result.substr(currentIndex, part.length);
        currentIndex += part.length;
        return originalPart;
      });
    } catch(e) {
      return [];
    }
  }

  /**
   * Обрабатываем событие нажатия кнопки в поле ввода
   * @param e
   */
  private onKeyDownInput(e: KeyboardEvent): void {
    switch (e.keyCode) {
      case KeyCodes.up:
        this.getNativeElementDropDownMenu() && this.scrollUp();
        break;
      case KeyCodes.down:
        this.getNativeElementDropDownMenu() && this.scrollDown();
        break;
      default:
        break;
    }
  }

  /**
   * Скролл вниз
   */
  private scrollDown(): void {
    setTimeout(() => {
      if (this.getDropDownItemActive()) {
        let dropDownItemActive = this.getDropDownItemActive(),
          dropDownItemActiveOffsetTop = dropDownItemActive.offsetTop,
          dropDownItemActiveOffsetHeight = dropDownItemActive.offsetHeight,
          dropDownMenu = this.getNativeElementDropDownMenu(),
          dropDownMenuClientHeight = dropDownMenu.clientHeight,
          dropDownMenuOffsetHeight = dropDownMenu.offsetHeight,
          dropDownMenuScrollTop = dropDownMenu.scrollTop;
        if (dropDownItemActiveOffsetTop === 0) {
          dropDownMenu.scrollTop = 0;
        } else if (dropDownItemActiveOffsetTop > dropDownMenuScrollTop + dropDownMenuClientHeight) {
          dropDownMenu.scrollTop = dropDownItemActiveOffsetTop + dropDownItemActiveOffsetHeight - dropDownMenuOffsetHeight;
        }
      }
    }, 1);
  }

  /**
   * Скролл наверх
   */
  private scrollUp(): void {
    setTimeout(() => {
      if (this.getDropDownItemActive()) {
        let dropDownItemActive = this.getDropDownItemActive(),
          dropDownItemActiveOffsetTop = dropDownItemActive.offsetTop,
          dropDownItemActiveOffsetHeight = dropDownItemActive.offsetHeight,
          dropDownMenu = this.getNativeElementDropDownMenu(),
          dropDownMenuScrollTop = dropDownMenu.scrollTop,
          findResultsLength = this.getFindResults().length;
        if (dropDownItemActiveOffsetTop === dropDownItemActiveOffsetHeight * (findResultsLength - 1)) {
          dropDownMenu.scrollTop = dropDownItemActiveOffsetTop * (findResultsLength - 1);
        } else if (dropDownItemActiveOffsetTop < dropDownMenuScrollTop) {
          dropDownMenu.scrollTop = dropDownItemActiveOffsetTop;
        }
      }
    }, 1);
  }

  /**
   * Получаем активный элемент в доме
   * @returns {any}
   */
  private getDropDownItemActive(): HTMLElement {
    let nativeElementTypeaheadMenu = this.elementRef.nativeElement.querySelector('ngb-typeahead-window');
    return nativeElementTypeaheadMenu ? nativeElementTypeaheadMenu.querySelector('.dropdown-item.active') : null;
  }

  /**
   * Задаем findResults
   * @param results
   * @returns {_ScTypeaheadComponent}
   */
  private setFindResults(results: Array<any>): _ScTypeaheadComponent {
    this.findResults = results;
    return this;
  }

  /**
   * Получаем findResults
   * @returns {Array<any>}
   */
  private getFindResults(): Array<any> {
    return this.findResults;
  }
}
