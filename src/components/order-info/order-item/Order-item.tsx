import React from "react";

import styles from './order-item.module.css';

type OrderItemProps = {
    name: string,
    descr: string,
}

const OrderItem: React.FC<OrderItemProps> = ({
    name,
    descr
}) => {

    return (
        <div className={styles.order_item}>
            <h3>{name}</h3>
            <p>{descr}</p>
        </div>
    );
};

export default OrderItem;