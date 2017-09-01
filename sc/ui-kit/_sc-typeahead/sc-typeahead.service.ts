import {Injectable} from "@angular/core";
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';

import { ITypeaheadParam } from './sc-typeahead.interfaces';

@Injectable()
export class ScTypeaheadService {

  constructor() {}

  /**
   * Поиск статичных значений простого набора строк
   * Например: ['aaa', 'bbbb', 'cccc']
   * @param param
   * @param text$
   * @returns {Observable<any>}
   */
  public searchSimple(param: ITypeaheadParam, text$: Observable<string>): Observable<any> {
    let {data, searchMinLength, searchWaitLoading} = param;
    return text$
      .debounceTime(searchWaitLoading) //Если хотим делать с задержкой
      .distinctUntilChanged()
      .map(term => {
        try {
          return term.length < searchMinLength ? [] : data.filter(v => new RegExp(term, 'gi').test(v)).splice(0, 10);
        } catch(e) {
          return [];
        }
      });
  }

  /**
   * Поиск статичных значений сложного объекта
   * @param param
   * @param formatter
   * @param text$
   * @returns {Observable<any>}
   */
  public searchComplex(param: ITypeaheadParam, formatter: (any) => any, text$: Observable<string>): Observable<any> {
    let {data, searchMinLength, searchWaitLoading} = param;
    return text$
      .debounceTime(searchWaitLoading) //Если хотим делать с задержкой
      .distinctUntilChanged()
      .map(term => term.length < searchMinLength ? [] : this.filterData(term, data, formatter));
  }

  /**
   * Ищем совпадения в сложном объекте
   * @param term
   * @param data
   * @param formatter
   * @returns {any[]}
   */
  private filterData(term: string, data: Array<any>, formatter: (any) => any): Array<any> {
    try {
      return data.filter(v => {
        const keys: Array<string> = Object.keys(formatter(v));
        return keys.reduce((prev, current) => prev || new RegExp(term, 'gi').test(v[current]), false);
      });
    } catch(e) {
      return [];
    }
  }

  /**
   * Поиск с запросом данных
   * @param param
   * @param text$
   * @returns {Observable<any>}
   */
  public searchHttp(param: ITypeaheadParam, text$): Observable<any> {
    let {data, searchMinLength, searchWaitLoading} = param;
    return text$
      .debounceTime(searchWaitLoading) //Если хотим делать с задержкой
      .distinctUntilChanged()
      .do(() => {
        param.searching = true
      })
      .switchMap(term => data(term))
      .map(response => response.json())
      .catch(() => Observable.of([]))
      .do(() => {
        param.searching = false
      });
  }
}
