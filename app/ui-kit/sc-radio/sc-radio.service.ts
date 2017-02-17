import {Injectable, EventEmitter} from "@angular/core";

@Injectable()
export class ScRadioService {
  private static _emitters: { [name: string]: EventEmitter<any> } = {};

  static get(name: string): EventEmitter<any> {
    if (!this._emitters[name])
      this._emitters[name] = new EventEmitter();
    return this._emitters[name];
  }

}
