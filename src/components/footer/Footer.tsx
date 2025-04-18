import React from "react";

import styles from './footer.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <span>Powered by</span>
            <span className={styles.brand_name}>Solid</span>
        </footer>
    )
};

export default Footer;