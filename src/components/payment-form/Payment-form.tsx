import React from "react";

import styles from './payment-form.module.css';

import Container from "../container/Container";
import ApplePaySection from "./apple-pay-section/Apple-pay-section";
import Divider from "./divider/Divider";
import ManualPaySection from "./manual-pay-section/Manual-pay-section";

const PaymentForm: React.FC = () => {

    return (
        <section className={styles.payment_form}>
            <Container>
                <ApplePaySection/>
                <Divider/>
                <ManualPaySection/>
            </Container>
        </section>
    );
};

export default PaymentForm;