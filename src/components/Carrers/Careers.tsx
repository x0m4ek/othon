import React from 'react';
import styles from "./Careers.module.scss";
import Arrow from "../../assets/images/orangeArrow.png";
import Globus from "../../assets/images/int.png";
import img from "../../assets/images/carrier.png";

const Careers = () => {
    return (
        <>
            <div className={styles.carrer}>
                <p>
                    Careers
                </p>
                <div className={styles.blocks}>
                    <div className={styles.left}>
                        <p>Our Offices</p>
                        <div className={styles.offices}>
                            <li>
                                Houston, TX <span>(Headquarters)</span>
                            </li>
                            <li>
                                Dallas, TX
                            </li>
                            <li>
                                Austin, TX
                            </li>
                        </div>
                        <div className={styles.listsss}>


                        <div className={styles.list}>
                            <a>
                                List Job Openings
                            </a>
                            <img src={Arrow} alt="img"/>
                        </div>
                        <div className={styles.list}>
                            <a>
                            Apply Now
                            </a>
                            <img src={Arrow} alt="img"/>
                        </div>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.wrapper}>


                        <img src={Globus} alt="img" className={styles.globus}/>
                        <p>OTHON provides equal employment opportunities to all employees and applicants for employment and prohibits discrimination and harassment of any type without regard to race, color, religion, age, sex, national origin, disability status, genetics, protected veteran status, sexual orientation, gender identity or expression, or any other characteristic protected by federal, state or local laws.</p>
                        </div>
                        <div className={styles.parent_img}>
                            <img src={img} alt="Reload" className={styles.image}/>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Careers;