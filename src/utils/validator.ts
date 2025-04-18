import { errorMessages, Language } from './validateErrors';

type ValidatorT = {
  currentLang: Language;
  setLanguage(lang: Language): void;
  validateCardNum(value: string): string;
  validateExpDate(value: string): string;
  validateCVC(value: string): string;
  formatCardNumber(value: string): string;
  formatExpDate(value: string): string;
  formatCVC(value: string): string;
};

export const validator: ValidatorT = {
  currentLang: 'en', // дефолт

  setLanguage: (lang: Language): void => {
    validator.currentLang = lang;
    },
  validateCardNum: (value: string): string => {
    const cardNumRegex = /^(?:\d{4}\s){3}\d{4}$|^\d{13,19}$/;
    return cardNumRegex.test(value)
      ? ''
      : errorMessages[validator.currentLang].cardNumber;
  },
  validateExpDate: (value: string): string => {
    const expDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!expDateRegex.test(value)) return errorMessages[validator.currentLang].invalidDate;

    const [month, year] = value.split('/');
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear() % 100;

    if (parseInt(month, 10) < 1 || parseInt(month, 10) > 12) return errorMessages[validator.currentLang].invalidMonth;

    const expYear = parseInt(year, 10);
    if (expYear < currentYear) return errorMessages[validator.currentLang].invalidYear;

    if (expYear === currentYear && parseInt(month, 10) < currentMonth) return errorMessages[validator.currentLang].pastMonth;

    return '';
  },
  validateCVC: (value: string): string => {
    const cleanValue = value.replace(/\s/g, '');
    const cvcRegex = /^\d{3}$/;
    return cvcRegex.test(cleanValue) ? '' : errorMessages[validator.currentLang].cvc;
  },
  formatCardNumber: (value: string): string => {
    return value
      .replace(/\D/g, '')
      .replace(/(.{4})/g, '$1 ')
      .trim();
  },
  formatExpDate: (value: string): string => {
    const cleaned = value.replace(/\D/g, '');
    if (cleaned.length <= 2) return cleaned;
    return `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}`;
  },
  formatCVC: (value: string): string => {
    return value
      .replace(/\D/g, '')
      .slice(0, 3);
  }
};