import React, { useState, useCallback } from "react";
import { useTranslation } from "react-i18next";

import styles from './manual-pay-section.module.css';

import { PaymentInput } from "./payment-input/Payment-input";
import { PaymentHint } from "./payment-hint/Payment-hint";
import Button from "../../button/Button";

import { useValidation } from "../../../hooks/useValidate";
import { validator } from "../../../utils/validator";

const ManualPaySection: React.FC = () => {

    const [cardNum, setCardNum] = useState<string>('');
    const [expDate, setExpDate] = useState<string>('');
    const [CVC, setCVC] = useState<string>('');
    const [isProcessing, setIsProcessing] = useState<boolean>(false);

    const {
        formatCardNumber,
        formatExpDate,
        formatCVC
    } = validator;

    const { errors, validateField, validateAll } = useValidation();

    const { t } = useTranslation();

    const resetForm = () => {
        setCardNum('');
        setExpDate('');
        setCVC('');
        setIsProcessing(false);
    };

    const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {

        const name = event.target.name as "cardNum" | "expDate" | "CVC";
        let value = event.target.value;
    
        switch (name) {
            case "cardNum": {
                value = formatCardNumber(value);
                setCardNum(value);
                break;
            }
            case "expDate": {
                value = formatExpDate(value);
                setExpDate(value); 
                break;
            }
            case "CVC": {
                value = formatCVC(value);
                setCVC(value); 
                break
            };
        }

        validateField(name, value);
    }, [validateField]);

    const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    
        const isValid = validateAll({ cardNum, expDate, CVC });
    
        if (isValid) {
            setIsProcessing(true);

        console.log("Data is valid. Sending:", { cardNum, expDate, CVC });

        setTimeout(() => {
            console.log("Data successfully sent!");
            resetForm();
        }, 10000);
        } else {
            console.log("Validation failed.");
        }
    }, [cardNum, expDate, CVC, validateAll]);

    return (
        <form className={styles.manual_form} onSubmit={handleSubmit} autoComplete={"on"}>
            <PaymentInput 
                key="card_number"
                label={t('cardNumber')}
                name="cardNum"
                placeholder="1234 1234 1234 1234"
                value={cardNum}
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
                        value={expDate}
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
                        value={CVC}
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