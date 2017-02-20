import {Injectable} from "@angular/core";
import {Observable} from 'rxjs/Observable';
import {Http , URLSearchParams} from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';

//TODO вынести в один интерфейс
export interface ITypeaheadParam {
  placeholder?: string,
  disabled?: boolean,
  searching?: boolean,
  searchMinLength?: number,
  states: Array<any>,
  searchLoading?: number
}

@Injectable()
export class ScTypeaheadService {

  constructor(private http: Http) {

  }

  /**
   * Поиск статичных значений
   * @param param
   * @param text$
   * @returns {Observable<any>}
   */
  public search(param: ITypeaheadParam, text$: Observable<string>): Observable<any> {
    let {states, searchMinLength, searchLoading} = param;
    return text$
      .debounceTime(searchLoading) //Если хотим делать с задержкой
      .distinctUntilChanged()
      .map(term => {
        return term.length < searchMinLength ? [] : states.filter(v => new RegExp(term, 'gi').test(v)).splice(0, 10);
      });
  }

  /**
   * Поиск с запросом данных
   * @param param
   * @param text$
   * @returns {Observable<any>}
   */
  public searchHttp(param: ITypeaheadParam, text$: Observable<string>): Observable<any> {
    let {states, searchMinLength, searchLoading, searching} = param;
    return text$
      .debounceTime(searchLoading)
      .distinctUntilChanged()
      .do(() => {
        searching = true
      })
      .switchMap(term => {
        if (term === '') {
          return Observable.of([]);
        }
        let wikiUrl = 'https://en.wikipedia.org/w/api.php';
        let params = new URLSearchParams();
        params.set('search', term);
        params.set('action', 'opensearch');
        params.set('format', 'json');
        params.set('callback', 'JSONP_CALLBACK');

        return this.http
          .get(wikiUrl, {search: params})
          .map(response => <string[]> response.json()[1]);
      })
      .catch(() => {
        return Observable.of([]);
      })
      .do(() => {
        searching = false
      });
  }
}
