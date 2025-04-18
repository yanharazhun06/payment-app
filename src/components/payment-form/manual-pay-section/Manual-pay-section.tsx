import React, { useState, useCallback } from "react";

import styles from './manual-pay-section.module.css';

import { PaymentInput } from "./payment-input/Payment-input";
import { PaymentHint } from "./payment-hint/Payment-hint";
import Button from "../../button/Button";

import { useValidation } from "../../../hooks/useValidate";
import { formatCardNumber, formatExpDate } from "../../../utils/validateFuncs";

const ManualPaySection: React.FC = () => {

    const [cardNum, setCardNum] = useState<string>('');
    const [expDate, setExpDate] = useState<string>('');
    const [CVC, setCVC] = useState<string>('');

    const { errors, validateField } = useValidation();

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
            case "CVC": setCVC(value); break;
        }

        validateField(name, value);
    }, [validateField]);

    return (
        <form className={styles.manual_form}>
            <PaymentInput 
                key="card_number"
                label="Card Number"
                name="cardNum"
                placeholder="1234 1234 1234 1234"
                value={cardNum}
                onChange={handleChange}
                maxLength={19}
                error={errors.cardNum}
            />
            <div className={styles.row}>
                <div className={styles.row_item}>
                    <PaymentInput
                        key="exp_date"
                        label="Expiration Date"
                        name="expDate"
                        placeholder="MM/YY"
                        value={expDate}
                        onChange={handleChange}
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
                    content="Start Trial"
                />
                <PaymentHint key="payment_hint" planName="Plan Pro" period="during 1 year" renewalInfo="automatically renewed"/>
            </div>
        </form>
    );
};

export default ManualPaySection;