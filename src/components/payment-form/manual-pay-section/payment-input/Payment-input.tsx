import React, { ChangeEventHandler } from "react";

import styles from './payment-input.module.css';

type PaymentInputProps = {
    name: "cardNum" | "expDate" | "CVC",
    label: string,
    placeholder: string,
    onChange: ChangeEventHandler<HTMLInputElement>,
    value: string,
    maxLength: number,
    error?: string,
}

export const PaymentInput: React.FC<PaymentInputProps> = ({
    name,
    label,
    placeholder,
    onChange,
    value,
    maxLength,
    error
}) => {

    return (
        <div className={styles.input_wrapper}>
            <label htmlFor={name}>{error || label}</label>
            <input 
                name={name} 
                placeholder={placeholder} 
                onChange={onChange}
                value={value}
                maxLength={maxLength}
                className={`${styles.input} ${error ? styles.error : ''}`}
            />
        </div>
    );
};