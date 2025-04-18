import React, { useState, ChangeEventHandler } from "react";

import { useTranslation } from "react-i18next";

import styles from './payment-input.module.css';

import icon from './icon/info.svg';

type PaymentInputProps = {
    name: "cardNum" | "expDate" | "CVC",
    label: string,
    placeholder: string,
    onChange: ChangeEventHandler<HTMLInputElement>,
    value: string,
    autocomplete: "cc-number" | "cc-exp" | "cc-csc",
    maxLength: number,
    error?: string | null,
}

export const PaymentInput: React.FC<PaymentInputProps> = ({
    name,
    label,
    placeholder,
    onChange,
    value,
    autocomplete,
    maxLength,
    error
}) => {

    const [showTooltip, setShowTooltip] = useState(false);

    const { t } = useTranslation();

    const handleInfoClick = () => {
        setShowTooltip(prev => !prev)

        setTimeout(() => {
            setShowTooltip(false);
        }, 3000);
    };

    return (
        <div className={styles.input_wrapper}>
            <label htmlFor={name}>{error ? t(`errors.${error}`) : label}</label>
            <div className={styles.inputContainer}>
                <input 
                    name={name} 
                    placeholder={placeholder} 
                    onChange={onChange}
                    value={value}
                    maxLength={maxLength}
                    autoComplete={autocomplete}
                    className={`${styles.input} ${error ? styles.error : ''}`}
                />
                {name === "CVC" && (
                    <button
                        type="button"
                        className={styles.infoIcon}
                        onClick={handleInfoClick}
                        aria-label="What is CVC?"
                    >
                        <img src={icon} alt="info"/>
                    </button>
                )}
                {showTooltip && name === "CVC" && (
                    <div className={styles.tooltip}>
                        3 digits on the back of your card.
                    </div>
                )}
            </div>
        </div>
    );
};