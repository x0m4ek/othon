import React from 'react';
import styles from "./About.module.scss";
import VideoPlayer from "../Video/VideoPlayer.tsx";

const About = () => {
    return (
        <>
            <div className={styles.about}>
                <div className={styles.img}>
                <p>About</p>
                </div>
                <div className={styles.text}>
                    <div className={styles.block}>
                        <p>Mission:</p>
                        <span>
                            Deliver service and execution excellence when providing high-quality engineering solutions. Apply innovative, reliable and cost-effective solutions.
                        </span>
                    </div>
                    <div className={styles.block}>
                        <p>Vision:</p>
                        <span>
                            Improve the quality of life in our communities, one project at a time. Develop strategic relationships with valued clients. Be a responsive and trusted partner of choice to our valued clients.
                        </span>
                    </div>
                    <div className={styles.block}>
                        <p>
                            What We Do:
                        </p>
                        <span>
                            OTHON is a national DBE/MBE engineering firm providing professional civil engineering, construction management, and environmental services to governmental entities, private industry, and other engineering firms - regionally, nationally, and internationally.
                        </span>
                    </div>
                </div>
            </div>
            <VideoPlayer />
        </>
    );
};

export default About;