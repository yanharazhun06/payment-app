export type Language = 'en' | 'ua'// додаємо ключ для мови, якщо треба додати нову

type ErrorMessagesT = {
  cardNumber: string;
  expDate: string;
  cvc: string;
  invalidMonth: string;
  invalidYear: string;
  pastMonth: string;
  invalidDate: string;
};

export const errorMessages: Record<Language, ErrorMessagesT> = {
  en: {
    cardNumber: 'Card number must be 16 digits',
    expDate: 'Enter a real date',
    cvc: 'CVC must be 3 digits.',
    invalidMonth: 'Enter a valid month',
    invalidYear: 'Year cannot be in the past',
    pastMonth: 'Month cannot be in the past',
    invalidDate: 'Invalid date format',
  },
  ua: {
    cardNumber: 'Номер карти повинен бути 16 цифр',
    expDate: 'Введіть правильну дату',
    cvc: 'CVC має бути 3 цифри',
    invalidMonth: 'Введіть правильний місяць',
    invalidYear: 'Рік не може бути в минулому',
    pastMonth: 'Місяць не може бути в минулому',
    invalidDate: 'Невірний формат дати',
  }
};