import React, { ReactNode } from "react";

import styles from './container.module.css';

const Container: React.FC<{children: ReactNode}> = ({
    children
}) => {

    return (
        <div className={styles.container}>
            {children}
        </div>
    );
};

export default Container;