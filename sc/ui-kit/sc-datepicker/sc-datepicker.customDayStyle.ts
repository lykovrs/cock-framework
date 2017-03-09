/**
 * Вспомогательный класс для кастомизации дней в календаре
 * 
 * @export
 * @class CustomDayStyle
 */
export class CustomDayStyle {
  public date: Date;
  public mode: string;
  public clazz: string;

  constructor(date: Date, mode: string, clazz: string) {
    this.date = date;
    this.mode = mode;
    this.clazz = clazz;
  }
}
