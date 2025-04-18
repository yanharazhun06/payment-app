import React, { ReactNode } from "react";

import styles from './Button.module.css';

type ButtonProps = {
    type: "submit" | "reset" | "button",
    content?: string,
    icon?: ReactNode,
    variant: "apple" | "manual",
    isProcessing?: boolean,
}

const Button: React.FC<ButtonProps> = ({
    type,
    content = "Click me",
    icon,
    variant = "manual",
    isProcessing = false,
}) => {

    return (
        <button type={type} className={`${styles.button} ${styles[variant]}`} disabled={isProcessing}>
            {isProcessing ? (
                (<><span className={styles.spinner}></span><span>Processing payment</span></>)
            ) : (
                icon ? icon : content
            )}
        </button>
    );
};

export default Button;