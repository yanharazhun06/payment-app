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
                cardNumberError: "Card number must be 16 digits",
                
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
            period: "щомісяця"
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
