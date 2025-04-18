import React from "react";

import styles from './payment-page.module.css';
import PaymentForm from "../../components/payment-form/Payment-form";
import OrderInfo from "../../components/order-info/Order-info";

const PaymentPage: React.FC = () => {

    return (
        <div className={styles.payment_page}>
            <PaymentForm/>
            <OrderInfo/>
        </div>
    );
};

export default PaymentPage;