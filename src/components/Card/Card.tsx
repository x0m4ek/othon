import React, { FC } from 'react';
import styles from './Card.module.scss';
import Arrow from "../../assets/images/arrow.png";

type CardProps = {
    title: string;
    url?: string;
    hoverImg: string;
};

const Card: FC<CardProps> = ({ title, hoverImg }) => {
    const cardStyles = {
        '--hover-bg-image': `url(${hoverImg})`,
    } as React.CSSProperties;

    return (
        <div className={styles.card_wrapper} style={cardStyles}>
            <div className={styles.info}>
                <p>{title}</p>
                <img src={Arrow} alt="Arrow" />
            </div>
        </div>
    );
};

export default Card;
