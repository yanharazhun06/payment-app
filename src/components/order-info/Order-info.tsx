import React, { useState, useMemo } from "react";

import styles from './order-info.module.css';

import { order, OrderItemT } from "./order";

import OrderItem from "./order-item/Order-item";
import Container from "../container/Container";

const OrderInfo: React.FC = () => {

    const {order_list} = order;

    const [currentOrder] = useState<OrderItemT[]>(order_list || []);

    const total_price = useMemo(() => currentOrder.reduce((sum, item) => sum + item.price, 0), [currentOrder]); // useMemo не обов'язковий тут, але уявімо, що отримую його після запиту

    return (
        <section className={styles.order_info}>
            <Container>
                <div className={styles.order_content}>
                    <h2>Order Info</h2>
                    <p>Description</p>
                    <div className={styles.order_items}>
                        {currentOrder.length > 0 ? currentOrder.map((item: OrderItemT) => 
                            <OrderItem
                                key={item.id}
                                name={item.name}
                                descr={item.descr}
                            />) : (
                                <p>No items in the order</p>
                            )
                        }
                    </div>
                    <div className={styles.total_price}>{total_price} UAH / month</div>
                </div>
            </Container>
        </section>
    );
};

export default OrderInfo;