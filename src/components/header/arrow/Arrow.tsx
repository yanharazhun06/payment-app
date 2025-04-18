import React from "react";

type ArrowProps = {
    width?: number,
    height?: number,
}

const Arrow: React.FC<ArrowProps> = ({
    width = 24,
    height = 24,
}) => {

    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12L11 6M5 12L11 18M5 12H19" stroke="#363A43" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
};

export default Arrow;