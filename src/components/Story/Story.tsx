import React from 'react';
import styles from "./Story.module.scss";
import info1 from '../../assets/images/info1.png';
import info2 from '../../assets/images/info2.png';
import Icon from "../../assets/images/int.png"
import ButtonCard from "../ButtonCard/ButtonCard.tsx";
const Story = () => {
    return (
            <>
                <div className={styles.story}>
                    <div className={styles.top}>
                        <div className={styles.left}>
                            <p>Our Story (history and legacy):</p>
                            <div className={styles.text}>
                                   <span>
                                OTHON is recognized as a multi-discipline civil engineering firm. It was incorporated in
                                1996 in Houston, Texas, by the late F. William Othon, P.E.
                            </span>
                            </div>

                            <div className={styles.info}>

                                <div className={styles.imgs}>
                                    <div className={styles.img_wrapper}>
                                        <img src={info1} alt="imga"/>
                                        <div className={styles.bottom}>
                                            <p>In 1998, OTHON expanded its operations with the addition of an office in
                                                the Dallas, Texas region, and in 2023 opened a third office in Austin,
                                                Texas.</p>
                                        </div>
                                    </div>
                                    <div className={styles.img_wrapper}>

                                    <img src={info2} alt="img"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.right}>
                            <img src={Icon} alt="Icon" className={styles.icon}/>
                            <p>Today OTHON is an award-winning company with over 100 employees. </p>
                            <span>
                                Our diverse group of Professional Engineers, designers and team members lead the way by providing a full range of design services in roads and highways, bridges and structural engineering, transportation planning, traffic engineering, high speed rail systems, pumping and drainage networks, airports, municipal infrastructure, intelligent transportation systems, construction services, public involvement and program management services for all levels of government agencies as well as private developers.
                            </span>
                        </div>
                    </div>
                    <div className={styles.last_blocks}>
                            <div className={styles.block}>
                                <p>
                                    Throughout the company’s progress, we have remained committed to our core values and vision. Making a difference in the lives of the people and communities we serve is paramount to our work. It is the why we work hard and smart to deliver the highest quality of services in the civil engineering industry.
                                </p>
                            </div>
                            <ButtonCard title={"About us"} details={"History and competencies of the company."} />
                    </div>

                </div>
            </>
    );
};

export default Story;