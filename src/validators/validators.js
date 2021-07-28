export const required = value => (value ? undefined : 'Поле не должно быть пустым')
export const maxLengthCreator = max => value =>
  value && value.length > max ? `Должно быть ${max} символов или менее` : undefined