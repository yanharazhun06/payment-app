import React, { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";

import styles from './order-info.module.css';

import { order, OrderItemT } from "./order";

import OrderItem from "./order-item/Order-item";
import Container from "../container/Container";

const OrderInfo: React.FC = () => {

    const {header, descr, order_list} = order;

    const { t } = useTranslation();

    const [orderHeader] = useState<string>(header.length > 97 ? `${header.slice(0, 97)}...` : header);
    const [orderDescr] = useState<string>(descr.length > 397 ? `${descr.slice(0, 397)}...` : descr);
    const [currentOrder] = useState<OrderItemT[]>(order_list || []);

    const total_price = useMemo(() => currentOrder.reduce((sum, item) => sum + item.price, 0), [currentOrder]); // useMemo не обов'язковий тут, але уявімо, що отримую дані після запиту

    return (
        <section className={styles.order_info}>
            <Container>
                <div className={styles.order_content}>
                    <h2 title={header}>{orderHeader}</h2>
                    <p title={descr}>{orderDescr}</p>
                    <div className={styles.order_items}>
                        {currentOrder.length ? currentOrder.map((item: OrderItemT) => 
                            <OrderItem
                                key={item.id}
                                name={item.name}
                                descr={item.descr}
                            />) : (
                                <p>No items in the order</p>
                            )
                        }
                    </div>
                    <div className={styles.total_price}>{total_price} UAH / {t('period')}</div>
                </div>
            </Container>
        </section>
    );
};

export default OrderInfo;