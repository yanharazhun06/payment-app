import React, { useState, useCallback } from "react";
import { useTranslation } from "react-i18next";

import styles from './manual-pay-section.module.css';

import { PaymentInput } from "./payment-input/Payment-input";
import { PaymentHint } from "./payment-hint/Payment-hint";
import Button from "../../button/Button";

import { useValidation } from "../../../hooks/useValidate";

const ManualPaySection: React.FC = () => {

    const [formData, setFormData] = useState<{cardNum: string, expDate: string, CVC: string}>({
        cardNum: '',
        expDate: '',
        CVC: ''
    });
    const [isProcessing, setIsProcessing] = useState<boolean>(false);

    const { errors, validateField, validateAll, validator } = useValidation();

    const { formatCardNumber, formatExpDate, formatCVC } = validator;

    const { t } = useTranslation();

    const resetForm = () => {
        setFormData({ cardNum: '', expDate: '', CVC: '' });
        setIsProcessing(false);
    };

    const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {

        const name = event.target.name as "cardNum" | "expDate" | "CVC";
        let value = event.target.value;
    
        if (name === "cardNum") value = formatCardNumber(value);
        if (name === "expDate") value = formatExpDate(value);
        if (name === "CVC") value = formatCVC(value);

        setFormData(prev => ({ ...prev, [name]: value }));
        validateField(name, value);

    }, [formatCardNumber, formatExpDate, formatCVC, validateField]);

    const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    
        const isValid = validateAll(formData);
    
        if (isValid) {
            setIsProcessing(true);
            console.log("Data is valid. Sending:", formData);

            setTimeout(() => {
                console.log("Data successfully sent!");
                resetForm();
            }, 10000);
        } else {
            console.log("Validation failed.");
        }
    }, [formData, validateAll]);

    return (
        <form className={styles.manual_form} onSubmit={handleSubmit} autoComplete={"on"}>
            <PaymentInput 
                key="card_number"
                label={t('cardNumber')}
                name="cardNum"
                placeholder="1234 1234 1234 1234"
                value={formData.cardNum}
                onChange={handleChange}
                autocomplete="cc-number"
                maxLength={19}
                error={errors.cardNum}
            />
            <div className={styles.row}>
                <div className={styles.row_item}>
                    <PaymentInput
                        key="exp_date"
                        label={t('expirationDate')}
                        name="expDate"
                        placeholder="MM/YY"
                        value={formData.expDate}
                        onChange={handleChange}
                        autocomplete="cc-exp"
                        maxLength={5}
                        error={errors.expDate}
                    />
                </div>
                <div className={styles.row_item}>
                    <PaymentInput
                        key="cvc"
                        label="CVC"
                        name="CVC"
                        placeholder="•••"
                        value={formData.CVC}
                        onChange={handleChange}
                        autocomplete="cc-csc"
                        maxLength={3}
                        error={errors.CVC}
                    />
                </div>
            </div>
            <div className={styles.form_footer}>
                <Button
                    key="manual_button"
                    type="submit"
                    variant="manual"
                    content={t('manualButtonText')}
                    isProcessing={isProcessing}
                />
                <PaymentHint key="payment_hint" planName="Plan Pro" period="during 1 year" renewalInfo="automatically renewed"/>
            </div>
        </form>
    );
};

export default ManualPaySection;