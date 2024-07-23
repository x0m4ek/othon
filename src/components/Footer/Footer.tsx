import React from 'react';
import styles from "./Footer.module.scss";
import ArrowOrange from "../../assets/images/orangeArrow.png";
import Logo from "../../assets/images/logoFooter.png";

const Footer = () => {
    return (
        <>
            <div className={styles.footer}>
                <div className="conteiner">


                <div className={styles.top_sec}>


                <div className={styles.contact}>
                    <h3>
                        Contact Us
                    </h3>
                    <div className={styles.inputs}>
                        <input type="text" placeholder={'Your Name'}/>
                        <input type="text" placeholder={'Your Email'}/>
                        <input type="text" placeholder={'Subject'}/>
                        <input type="text" placeholder={'Your Message'}/>
                    </div>
                    <div className={styles.send}>
                        <span>Send Message</span><img src={ArrowOrange} alt="image arrow"/>
                    </div>
                </div>
                    <div className={styles.logo}>
                        <img src={Logo} alt="logo png"/>
                    </div>
                </div>
                <div className={styles.wrapper_blocks}>


                    <div className={styles.blocks}>
                        <div className={styles.block}>
                        <span>Houston
(Headquarters)</span>
                            <p>575 N. Dairy Ashford Rd., Suite 650 Houston, TX 77079</p>
                            <p>
                                P: 713.975.8555
                            </p>
                        </div>


                        <div className={styles.block}>
                        <span>Dallas
</span>
                            <p>2140 Lake Park Blvd., Suite 200 Richardson, TX 75080<br /> </p>
                            <p>
                                P: 214.340.7344
                            </p>
                        </div>
                        <div className={styles.block}>
                        <span>Austin
</span>
                            <p>9442 Capital of Texas Highway North Plaza 1, Suite 500 Austin, TX 78759</p>
                            <p>
                                P: 512.940.8602
                            </p>
                        </div>

                    </div>
                    <div className={styles.blocks}>
                        <div className={styles.block}>
                        <span>International Offices
</span>
                            <small>Sangineni Engineering and Technical Services (SEATS) <p>– Hyderabad, India</p>
                            </small>
                            <small>Othon Enginero Consultares  <p>– Santander, Spain</p>
                            </small>
                        </div>


                        <div className={`${styles.block} ${styles.lastblock}`}>
                        <span>Certifications</span>
                            <div className={`${styles.block} ${styles.special}`}>


                                <div className={styles.block}>
                                    <span>DBE:</span>
                                    <small>
                                        Texas

                                    </small>
                                    <small>
                                        Georgia

                                    </small>
                                    <small> California
                                    </small>
                                    <small>Colorado</small>
                                </div>
                                <div className={styles.block}>
                                    <span>DBE:</span>
                                    <small>Florida

                                    </small>
                                    <small> New Mexico</small>
                                    <small>Virginia</small>
                                </div>
                                <div className={styles.block}>
                                    <span>SBE/MBE/HUB:</span>
                                    <small>Texas

                                    </small>

                                </div>
                            </div>
                        </div>


                    </div>
                </div>
                <div className={styles.copyright}>
                    <p>©2024 OTHON, INC. All Rights Reserved.</p>
                    <p>
                        Terms and Conditions
                    </p>
                    <span>Created with ♡ by <p>DD.NYC®</p></span>
                    <p>Privacy Policy</p>
                    <div className={styles.socials}>
                        <div className={styles.social}>
                            <svg width="8" height="17" viewBox="0 0 8 17" fill="none"
                                 xmlns="http://www.w3.org/2000/svg" className={styles.svg}>
                                <path
                                    d="M5.43117 16.6295V8.53404H7.66588L7.96203 5.74428H5.43117L5.43496 4.34798C5.43496 3.62037 5.5041 3.2305 6.54916 3.2305H7.94621V0.44043H5.71118C3.02655 0.44043 2.08163 1.79376 2.08163 4.06964V5.7446H0.408203V8.53436H2.08163V16.6295H5.43117Z"
                                    fill="#18306C"/>
                            </svg>

                        </div>
                        <div className={styles.social}>
                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M4.49871 2.1905C4.47682 1.19708 3.76642 0.44043 2.61284 0.44043C1.45925 0.44043 0.705078 1.19708 0.705078 2.1905C0.705078 3.16335 1.43696 3.94178 2.56907 3.94178H2.59061C3.76642 3.94178 4.49871 3.16335 4.49871 2.1905ZM4.27643 5.32422H0.904297V15.4561H4.27643V5.32422ZM12.5566 5.08594C14.7756 5.08594 16.4392 6.53435 16.4392 9.64642L16.4391 15.4557H13.0671V10.0352C13.0671 8.67364 12.5791 7.74457 11.3584 7.74457C10.4267 7.74457 9.87183 8.3709 9.62812 8.97584C9.53896 9.19264 9.51707 9.49471 9.51707 9.79752V15.456H6.14453C6.14453 15.456 6.18898 6.27484 6.14453 5.32412H9.51707V6.75922C9.96463 6.06934 10.7662 5.08594 12.5566 5.08594Z"
                                      fill="#18306C"/>
                            </svg>

                        </div>
                        <div className={styles.social}>
                            <div className={styles.social}>
                                <div className={styles.social}>
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M6.45416 0.374054C6.5924 0.373838 6.74111 0.373905 6.90159 0.373977L7.16609 0.374054C9.28502 0.374054 9.53617 0.38166 10.3729 0.419687C11.1467 0.455069 11.5666 0.584361 11.8464 0.692986C12.2167 0.836827 12.4808 1.00878 12.7584 1.28654C13.0361 1.5643 13.2081 1.82884 13.3523 2.19919C13.4609 2.4786 13.5903 2.89856 13.6256 3.67232C13.6636 4.50892 13.6719 4.76023 13.6719 6.87817C13.6719 8.99611 13.6636 9.24742 13.6256 10.084C13.5902 10.8578 13.4609 11.2777 13.3523 11.5572C13.2084 11.9275 13.0361 12.1912 12.7584 12.4688C12.4806 12.7466 12.2169 12.9185 11.8464 13.0624C11.567 13.1715 11.1467 13.3004 10.3729 13.3358C9.53633 13.3739 9.28502 13.3821 7.16609 13.3821C5.04699 13.3821 4.79585 13.3739 3.95925 13.3358C3.18548 13.3001 2.76553 13.1708 2.48562 13.0622C2.11527 12.9184 1.85073 12.7464 1.57297 12.4686C1.29521 12.1909 1.12326 11.927 0.979088 11.5565C0.870462 11.2771 0.741005 10.8571 0.705789 10.0834C0.667762 9.24676 0.660156 8.99545 0.660156 6.87619C0.660156 4.75692 0.667762 4.50693 0.705789 3.67034C0.74117 2.89657 0.870462 2.47662 0.979088 2.19687C1.12293 1.82652 1.29521 1.56199 1.57297 1.28422C1.85073 1.00646 2.11527 0.834513 2.48562 0.69034C2.76537 0.581219 3.18548 0.452258 3.95925 0.416711C4.69136 0.383644 4.97507 0.373724 6.45416 0.37207V0.374054ZM11.4015 1.69174C10.8758 1.69174 10.4492 2.11781 10.4492 2.64374C10.4492 3.1695 10.8758 3.59607 11.4015 3.59607C11.9273 3.59607 12.3539 3.1695 12.3539 2.64374C12.3539 2.11797 11.9273 1.69141 11.4015 1.69141V1.69174ZM3.08984 6.8802C3.08984 4.62955 4.91456 2.80478 7.16519 2.80469C9.41589 2.80469 11.2402 4.62949 11.2402 6.8802C11.2402 9.1309 9.41606 10.9549 7.16535 10.9549C4.91465 10.9549 3.08984 9.1309 3.08984 6.8802Z"
                                              fill="#18306C"/>
                                    </svg>


                                </div>

                            </div>

                        </div>
                        <div className={styles.social}>
                            <div className={styles.social}>
                                <div className={styles.social}>
                                    <svg width="15" height="13" viewBox="0 0 15 13" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7.48067 4.09438L7.5119 4.60927L6.99149 4.54622C5.09718 4.30454 3.44227 3.48493 2.03716 2.10841L1.35021 1.42541L1.17327 1.92978C0.798576 3.05411 1.03797 4.24149 1.81858 5.04009C2.23491 5.48141 2.14124 5.54446 1.42307 5.28176C1.17327 5.1977 0.954699 5.13466 0.933883 5.16618C0.861025 5.23973 1.11082 6.19594 1.30858 6.57422C1.57919 7.09961 2.13083 7.61449 2.73451 7.91922L3.24451 8.1609L2.64084 8.17141C2.05797 8.17141 2.03716 8.18191 2.09961 8.40258C2.30777 9.08558 3.13002 9.81062 4.04595 10.1259L4.69126 10.3465L4.12922 10.6828C3.29656 11.1661 2.31818 11.4393 1.3398 11.4603C0.871433 11.4709 0.486328 11.5129 0.486328 11.5444C0.486328 11.6495 1.75613 12.2379 2.49512 12.4691C4.71208 13.1521 7.34537 12.8579 9.32294 11.6915C10.728 10.8614 12.1332 9.21168 12.7889 7.61449C13.1428 6.76336 13.4966 5.20821 13.4966 4.46216C13.4966 3.9788 13.5279 3.91575 14.1107 3.33782C14.4542 3.00157 14.7769 2.6338 14.8393 2.52872C14.9434 2.32908 14.933 2.32908 14.4022 2.50771C13.5175 2.82294 13.3926 2.78091 13.8297 2.30806C14.1524 1.97181 14.5375 1.36236 14.5375 1.18373C14.5375 1.1522 14.3813 1.20474 14.2044 1.29931C14.0171 1.40439 13.6007 1.56201 13.2885 1.65658L12.7264 1.83521L12.2164 1.48845C11.9354 1.29931 11.5399 1.08916 11.3317 1.02611C10.8009 0.879002 9.98906 0.900017 9.51028 1.06814C8.20925 1.54099 7.387 2.7599 7.48067 4.09438Z"
                                            fill="#18306C"/>
                                    </svg>


                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
};

export default Footer;