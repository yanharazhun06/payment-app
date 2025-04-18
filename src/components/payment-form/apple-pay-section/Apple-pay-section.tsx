import React from "react";
import { useTranslation } from "react-i18next";

import styles from './apple-pay-section.module.css';
import AppleIcon from "./apple-icon/Apple-Icon";
import Button from "../../button/Button";
import Arrow from "../../header/arrow/Arrow";

const ApplePaySection: React.FC = () => {

    const {t} = useTranslation();

    return (
        <>
            <div className={styles.extra}>
                <button type="button">
                    <Arrow/>
                </button>
                <div className={styles.checkout}>{t('checkout')}</div>
            </div>
            <div className={styles.apple_pay_section}>
                <div className={styles.title}>
                    <h2>5 days free</h2>
                    <p>then 299.99 UAH per 14 days</p>
                </div>
                <Button
                    key="apple_pay_button"
                    type="button"
                    variant="apple"
                    icon={<AppleIcon/>}
                />
            </div>
        </>
    );
};

export default ApplePaySection;