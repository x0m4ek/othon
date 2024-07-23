import React, {FC} from 'react';
import styles from  "./ButtonCard.module.scss";
import Arrow from "../Arrow/Arrow.tsx";


type  Props =  {
    title: string,
    details:string,

}
const ButtonCard:FC<Props> = (props) => {
    return (
        <>
            <div className={styles.card_wrapper}>
                <p>{props.title}</p>
                <div className={styles.details}>
                    <p>{props.details}</p>
                    <Arrow />
                </div>
            </div>
        </>
    );
};

export default ButtonCard;