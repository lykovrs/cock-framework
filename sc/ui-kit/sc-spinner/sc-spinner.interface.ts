export interface ISpinnerOptions {
  values ?: ISpinnerOptionsValues, // Объект с параметрами для стандартной инкрементации
  valuesFixed ?: Array<number>, // Если нужно использовать фиксированный массив значений
  minTooltip ?: string, // Надпись для tooltip декремента
  maxTooltip ?: string, // Надпись для tooltip инкремента
  disabled ?: boolean, // Заблокировать состояние
  isArrowsType ?: boolean; // Тип инкремента/декремента (Стрелки или +-)
}

interface ISpinnerOptionsValues {
  min: number, // минимальное значение
  max: number, // максимульное значение
  step: number // Шаг инкремента/декремента
}
