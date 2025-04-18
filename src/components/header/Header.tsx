import React from "react";

import styles from './header.module.css';

import Arrow from "./arrow/Arrow";

const Header: React.FC = () => {

    return (
        <div className={styles.header}>
            <button className={styles.step_back}>
                <Arrow/>
            </button>
            <div className={styles.title}>
                <h3>Checkout</h3>
            </div>
            <button className={styles.lang}>
                <span>Укр</span>
            </button>
        </div>
    );
}

export default Header;