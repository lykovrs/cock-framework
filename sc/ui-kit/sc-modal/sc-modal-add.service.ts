/**
 * Singleton для хранения компонента в модалке
 */
import { Injectable } from '@angular/core';

@Injectable()
export class ScModalAddService {
  private component: any;

  /**
   * Сохраняем компонент
   * @param component
   */
  setComponent(component) {
    this.component = component;
  }

  /**
   * Получаем компонент
   * @returns {any}
   */
  getComponent() {
    return this.component;
  }
}
