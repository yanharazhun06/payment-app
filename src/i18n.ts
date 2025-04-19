import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
        translation: {
            checkout: "Checkout",
            paymentMethod: "or pay with card",
            cardNumber: "Card Number",
            expirationDate: "Expiration Date",
            manualButtonText: "Start Trial",
            period: "per month",
            errors: {
              cardNumber: 'Card number must be 16 digits',
              expDate: 'Enter a real date',
              cvc: 'CVC must be 3 digits.',
              invalidMonth: 'Enter a valid month',
              invalidYear: 'Year cannot be in the past',
              pastMonth: 'Month cannot be in the past',
              invalidDate: 'Invalid date format',
            }
        }
    },
  ua: {
        translation: {
            checkout: "Оплата",
            paymentMethod: "або оплатити карткою",
            cardNumber: "Номер картки",
            expirationDate: "Термін придатності",
            manualButtonText: "Розпочати пробну версію",
            period: "щомісяця",
            errors: {
              cardNumber: 'Номер карти повинен бути 16 цифр',
              expDate: 'Введіть правильну дату',
              cvc: 'CVC має бути 3 цифри',
              invalidMonth: 'Введіть правильний місяць',
              invalidYear: 'Рік не може бути в минулому',
              pastMonth: 'Місяць не може бути в минулому',
              invalidDate: 'Невірний формат дати',
            }
        }
    }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
