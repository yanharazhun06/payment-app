import { useTranslation } from 'react-i18next';

export const useLanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const currentLanguage = i18n.language;

  const switchLanguage = () => {
    if (currentLanguage === 'en') i18n.changeLanguage('ua');
    else i18n.changeLanguage('en');
  };

  return {
    switchLanguage,
    currentLanguage
  };
};