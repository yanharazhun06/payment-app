import React from "react";

import { useTranslation } from 'react-i18next';

import styles from './divider.module.css';

const Divider: React.FC = () => {

    const {t} = useTranslation();

    return (
        <div className={styles.divider}>
            <div className={styles.title}>{t('paymentMethod')}</div>
        </div>
    );
};

export default Divider;