import React, { ReactNode } from "react";

import styles from './Button.module.css';

type ButtonProps = {
    type: "submit" | "reset" | "button",
    content?: string,
    icon?: ReactNode,
    variant: "apple" | "manual",
}

const Button: React.FC<ButtonProps> = ({
    type,
    content = "Click me",
    icon,
    variant = "manual",
}) => {

    return (
        <button type={type} className={`${styles.button} ${styles[variant]}`}>
            {icon ? icon : content}
        </button>
    );
};

export default Button;