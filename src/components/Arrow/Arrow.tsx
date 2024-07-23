import React from 'react';
import styles from "./Arrow.module.scss";
import ArrowImg from "../../assets/images/orangeArrow.png";

const Arrow = () => {
    return (
        <div className={styles.arrow}>
            <svg className={styles.svgArrow} width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M2 10.5C1.17157 10.5 0.5 11.1716 0.5 12C0.5 12.8284 1.17157 13.5 2 13.5V10.5ZM21.4454 13.0607C22.0312 12.4749 22.0312 11.5251 21.4454 10.9393L11.8995 1.3934C11.3137 0.807611 10.364 0.807611 9.77818 1.3934C9.19239 1.97919 9.19239 2.92893 9.77818 3.51472L18.2635 12L9.77818 20.4853C9.19239 21.0711 9.19239 22.0208 9.77818 22.6066C10.364 23.1924 11.3137 23.1924 11.8995 22.6066L21.4454 13.0607ZM2 13.5L20.3848 13.5V10.5L2 10.5V13.5Z"
                    fill="#F2683C"/>
            </svg>
        </div>
    );
};

export default Arrow;
