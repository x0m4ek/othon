import React, {FC} from 'react';
import styles from "./Button.module.scss";

type Props = {
    text:string,
    onClick?:() => void,
}
const Button:FC<Props> = (props) => {
    return (
        <div  className={styles.button} onClick={() => props.onClick()}>
            <span>
                {props.text}
            </span>

        </div>
    );
};

export default Button;