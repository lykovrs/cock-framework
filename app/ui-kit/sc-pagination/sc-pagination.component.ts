import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges
} from '@angular/core';

@Component({
  selector: 'sc-pagination',
  templateUrl: 'sc-pagination.component.html',
  styleUrls: ['sc-pagination.component.scss']
})
export class ScPaginationComponent implements OnChanges {

  private PER_PAGE_DEFAULT: number = 10; //Количество отображаемых элементов на странице
  private totalPages: number = 0; //Количество страниц
  private currentPageIndex: number = 0; //Текущий индекс страницы
  private startItemIndex: number = 0; //Начальный индекс элемента на странице
  private endItemIndex: number = 0; //Конечный индекс элемента на странице

  @Input() total: number; //Количество переданных элементов
  @Input() pageSize?: number; //Количество отображаемых элементов на странице
  @Input() startPage?: number; //Стартовая страница
  @Input() disabled?: boolean;

  @Output() scClick? = new EventEmitter(); //cb

  constructor() { }

  ngOnChanges() {
      this.reset();
  }

  /**
   * Инициализация компонента
   * @returns {ScPaginationComponent}
   */
  private reset(): ScPaginationComponent {
    !this.getPageSize() && this.setPageSize(this.PER_PAGE_DEFAULT);
    this.setTotalPages(Math.ceil(this.getTotal() / this.getPageSize()));
    if (this.getTotalPages() > 0 && this.getCurrentPageIndex() > this.getTotalPages() - 1) {
      this.setCurrentPageIndex(this.getTotalPages() - 1);
    }
    this.initStartPage();
    return this;
  }

  /**
   * Инициализация значений
   * @returns {ScPaginationComponent}
   */
  protected initializeValues(): ScPaginationComponent {
    this.setStartItemIndex(this.getPageSize() * this.getCurrentPageIndex())
        .setEndItemIndex((this.getStartItemIndex() + this.getPageSize()) > this.getTotal() ? this.getTotal() : this.getStartItemIndex() + this.getPageSize());
    return this;
  }

  /**
   * Получаем количество элементов на странице
   * @returns {number}
   */
  private getPageSize(): number {
    return this.pageSize;
  }

  /**
   * Задаем количество элементов на странице
   * @param pageSize
   * @returns {ScPaginationComponent}
   */
  private setPageSize(pageSize: number): ScPaginationComponent {
    this.pageSize = pageSize;
    return this.reset();
  }

  /**
   * Получаем количество страниц
   * @returns {number}
   */
  private getTotalPages(): number {
    return this.totalPages;
  }

  /**
   * Задаем количество страниц
   * @param totalPages
   * @returns {ScPaginationComponent}
   */
  private setTotalPages(totalPages: number): ScPaginationComponent {
    this.totalPages = totalPages;
    return this;
  }

  /**
   * Получаем количество всех элементов
   * @returns {number}
   */
  private getTotal(): number {
    return this.total;
  }

  /**
   * Задаем количество всех элементов
   * @param total
   * @returns {ScPaginationComponent}
   */
  private setTotal(total: number): ScPaginationComponent {
    this.total = total || 0;
    return this.reset();
  }

  /**
   * Получаем текущий индекс страницы
   * @returns {number}
   */
  private getCurrentPageIndex(): number {
    return this.currentPageIndex;
  }

  /**
   * Задаем текущий индекс страницы
   * @param currentPagesIndex
   * @returns {ScPaginationComponent}
   */
  private setCurrentPageIndex(currentPagesIndex: number): ScPaginationComponent {
    this.currentPageIndex = currentPagesIndex;
    return this;
  }

  /**
   * Получаем стартовго индекса
   * @returns {number}
   */
  private getStartItemIndex(): number {
    return this.startItemIndex;
  }

  /**
   * Задаем стартовый индекс
   * @param startItemIndex
   * @returns {ScPaginationComponent}
   */
  private setStartItemIndex(startItemIndex: number): ScPaginationComponent {
    this.startItemIndex = startItemIndex;
    return this;
  }

  /**
   * Получаем конечный индекс
   * @returns {number}
   */
  private getEndItemIndex(): number {
    return this.endItemIndex;
  }

  /**
   * Задаем конечный индекс
   * @param endItemIndex
   * @returns {ScPaginationComponent}
   */
  private setEndItemIndex(endItemIndex: number): ScPaginationComponent {
    this.endItemIndex = endItemIndex;
    return this;
  }

  /**
   * Устанавливаем страницу по индексу
   * @param index
   * @returns {ScPaginationComponent}
   */
  public setPageByIndex(index: number): ScPaginationComponent {
    if (index > 0 && index <= this.getTotalPages()) {
      this.setCurrentPageIndex(index)
          .initializeValues();
    }
    return this;
  }

  /**
   * Переход на предыдущую страницу
   * @returns {ScPaginationComponent}
   */
  public prevPage(): ScPaginationComponent {
    this.onScClick();
    if (this.hasPrevPage()) {
      this.setCurrentPageIndex(this.getCurrentPageIndex() - 1)
          .setPageByIndex(this.getCurrentPageIndex());
    }
    return this;
  }

  /**
   * Переход на следующую страницу
   * @returns {ScPaginationComponent}
   */
  public nextPage(): ScPaginationComponent {
    this.onScClick();
    if (this.hasNextPage()) {
      this.setCurrentPageIndex(this.getCurrentPageIndex() + 1)
          .setPageByIndex(this.getCurrentPageIndex());
    }
    return this;
  }

  /**
   * Переход на последнюю страницу
   * @returns {ScPaginationComponent}
   */
  public lastPage(): ScPaginationComponent {
    this.onScClick();
    return this.setPageByIndex(this.getTotalPages());
  }

  /**
   * Переходим на первую страницу
   * @returns {ScPaginationComponent}
   */
  public firstPage(): ScPaginationComponent {
    this.onScClick();
    return this.setPageByIndex(1);
  }

  /**
   * Проверка возможности перехода на предыдущую страницу
   * @return {boolean}
   */
  public hasPrevPage(): boolean {
    return this.getCurrentPageIndex() > 1;
  }

  /**
   * Проверка возможности перехода на следующую страницу
   * @return {boolean}
   */
  public hasNextPage(): boolean {
    return this.getCurrentPageIndex() < this.getTotalPages();
  }

  /**
   * Возвращаем cb при смене страницы
   */
  private onScClick(): void {
    this.scClick.emit();
  }

  /**
   * Задаем индекс страницы при стартовой инициализации
   * @param startPage
   * @returns {ScPaginationComponent}
   */
  private setStartPage(startPage: number): ScPaginationComponent {
    this.startPage = startPage;
    return this;
  }

  /**
   * Получаем индекс страницы при стартовой инициализации
   */
  private getStartPage(): number {
    return this.startPage;
  }

  /**
   * Различные проверки, связанные с установкой стартовой страницы
   * @returns {ScPaginationComponent}
   */
  private initStartPage(): ScPaginationComponent {
    if (!this.getTotal()) {
        this.setCurrentPageIndex(0);
    } else {
        if (!this.getStartPage()) {
          this.setStartPage(1)
              .setCurrentPageIndex(this.getStartPage());
        } else {
            if (this.getTotalPages() >= this.getStartPage()) {
                this.setCurrentPageIndex(this.getStartPage());
            } else {
              this.setStartPage(1)
                  .setCurrentPageIndex(this.getStartPage());
            }
        }
    }
    return this;
  }

}
