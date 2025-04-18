import React, { useState, useEffect } from "react";

import { useLanguageSwitcher } from '../../hooks/useLanguageSwitcher';
import { useTranslation } from 'react-i18next';
import { validator } from "../../utils/validator";

import styles from './header.module.css';

import Arrow from "./arrow/Arrow";

const Header: React.FC = () => {

    const { switchLanguage, currentLanguage } = useLanguageSwitcher();
    const { t } = useTranslation();

    const { setLanguage } = validator;

    const [currentLang, setCurrentLang] = useState<string>('');

    useEffect(() => {
        setCurrentLang(currentLanguage === 'en' ? 'Укр' : 'En');
        setLanguage(currentLanguage === 'en' ? 'en' : 'ua');

    }, [currentLanguage]);

    return (
        <div className={styles.header}>
            <button className={styles.step_back}>
                <Arrow/>
            </button>
            <div className={styles.title}>
                <h3>{t('checkout')}</h3>
            </div>
            <button
                className={styles.lang}
                onClick={switchLanguage}
            >{currentLang}</button>
        </div>
    );
}

export default Header;