import React from "react";

import styles from './payment-hint.module.css';

type PaymentHintProps = {
    planName: string,
    period: string,
    renewalInfo: string,
}

export const PaymentHint: React.FC<PaymentHintProps> = ({
    planName,
    period,
    renewalInfo,
}) => {

    return (
        <div className={styles.hint}>
            <p>
                You'll have your <span>{planName}</span> <span>{period}</span>. 
                After this period of time, your plan will be <span>{renewalInfo}</span> with its original price without any discounts applied.
            </p>
        </div>
    );
}