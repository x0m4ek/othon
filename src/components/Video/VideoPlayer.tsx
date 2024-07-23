// GifPlayer.tsx
import React, { useState } from 'react';
import styles from './VideoPlayer.module.scss';
import SoundOnIcon from "../../assets/images/soundOn.png";
import SoundOffIcon from "../../assets/images/soundOff.png";
import GifImage from "../../assets/images/video.gif";

const GifPlayer: React.FC = () => {
    const [isMuted, setIsMuted] = useState(true);

    const toggleSound = () => {
        setIsMuted(!isMuted);
    };

    return (
        <div className={styles.gif_wrapper}>
            <img src={GifImage} alt="Animated GIF" className={styles.gif_element} />
            <div className={styles.sound_icon} onClick={toggleSound}>
                <img src={isMuted ? SoundOffIcon : SoundOnIcon} alt="Sound Icon" />
            </div>
        </div>
    );
};

export default GifPlayer;
