export interface ITeaser {
  num ?: number, // Значение
  type: string, //  Стиль
  text ?: string, // текст для tooltip
  position ?: string // Позиционирование
}

export enum TeaserTypes {
  'mine-shaft',
  'shakespeare',
  'elm',
  'neon-carrot',
  'sunglo'
}
