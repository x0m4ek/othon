import React, { FC, useEffect, useState, useRef } from 'react';
import styles from "./MobileServices.module.scss";
import img1 from "../../assets/images/service1.png";
import img2 from "../../assets/images/service2.png";
import img3 from "../../assets/images/service3.png";
import img4 from "../../assets/images/service4.png";
import img5 from "../../assets/images/service1.png";
import img6 from "../../assets/images/service2.png";
import Slider from "../Slider/Slider.tsx";
import {AnimatePresence, motion} from "framer-motion";
import { useMediaQuery } from 'react-responsive';
import Arrow from "../Arrow/Arrow.tsx";
import arrowNext from "../../assets/images/orangeArrow.png";
import arrowBack from "../../assets/images/backArrow.png"

type Props = {
    name: string;
    isActive: boolean;
    onClick: () => void;
};

type CatData = {
    title: string;
    img: string;
    text: string;
};

const Cat: FC<Props> = (props) => {
    return (
        <p className={`${props.isActive ? styles.active : ''}`} onClick={props.onClick}>
            {props.name}
        </p>
    );
};

const MobileServices: FC = () => {
    const [catSelected, setSelectedCat] = useState<string>('Highway and Road Engineering');
    const [prevCatIndex, setPrevCatIndex] = useState<number>(0);
    const sliderRef = useRef<any>(null);
    const isTransitioning = useRef<boolean>(false); // Новий реф для відслідковування стану переходу

    const cats = [
        "Highway and Road Engineering",
        "Transportation Planning",
        "Traffic Engineering",
        "Bridges & Structural",
        "Construction Services",
        "Intelligent Transportation Systems Design",
        "Illumination",
        "Public Involvement",
    ];

    const data_for_cat: CatData[] = [
        {
            title: "Highway and Road Engineering",
            img: img1,
            text: "Our mission is to accomplish great things, exceed our clients’ expectations and meet the challenges of our growing infrastructure through practical engineering solutions, innovation, and hard work. \n" +
                "\n" +
                "Our diverse group of Professional Engineers and Designers lead the way by providing a full range of  services in roads and highways: hands-on design management of roadway design, traffic control plans, schematic design, minor and major bridge design, traffic engineering studies, traffic demand modeling, intelligent transportation systems, signing and pavement markings, roadway hydraulics, from minor crossings through major highways and interchanges across the state, including the reconstruction of the $1.5 billion US 290 corridor."
        },
        {
            title: "Transportation Planning",
            img: img2,
            text: "Specializing in Travel Demand Modeling; Corridor Studies; Feasibility Studies; Route Studies; Long Range Planning—State, MPO, and Community; Grants Assistance; Environmental Planning; and Emerging Technologies, OTHON possesses the expertise to devise innovative, practical, cost-efficient solutions for even the most demanding planning challenges. \n" +
                "\n" +
                "Our wealth of experience enables us to provide solutions customized to suit your project’s unique requirements. OTHON is dedicated to enhancing mobility in our communities while fostering inclusion, social equity, fiscal viability, and economic vitality. We merge insights into human preferences and behaviors with thorough data analysis to future-proof cities."
        },
        {
            title: "Traffic Engineering",
            img: img3,
            text: "OTHON has over 28 years of national and international experience in structural engineering providing a full range of structure design services including major and minor bridge structures, multi-level interchange bridge structures, drilled shaft retaining walls, overhead sign bridge and cantilever sign bridge structures; design of traffic signal and changeable message sign structures as well as the foundations for the above noted types of structures; steel and concrete superstructures such as prestressed concrete I-beams, Texas TX-girders, slab beams, box beams and cast-in-place/precast post tensioned segmental bridges."
        },
        {
            title: "Bridges & Structural",
            img: img3,
            text: "OTHON’s reputable construction management services have provided critical support in the delivery of many high-profile projects, including the $2.5 billion Katy Freeway Reconstruction Project, Bush Intercontinental Airport Rehabilitation, Houston Toyota Center, 2013 Fort Bend Mobility Bond Program and the $1.5 billion US 290 Reconstruction Project.\n" +
                "\n" +
                "We assist our clients by providing a comprehensive array of services aimed to facilitate construction from opening to final completion including Construction Management and Inspection Services, Scheduling and Mitigation Strategies, and Public Involvement and Community Outreach services. OTHON provides comprehensive constructability review for all design components and recommendation of the contractor’s schedule, troubleshooting field problems, review of contractor’s change orders, coordination with agencies and adjacent projects, and time impact analysis. \n" +
                "\n" +
                "Through effective management and coordination from project kick-off to close-out, our Construction Services team is committed to delivering projects on time and under budget."
        },
        {
            title: "Construction Services",
            img: img5,
            text: "OTHON’s reputable construction management services have provided critical support in the delivery of many high-profile projects, including the $2.5 billion Katy Freeway Reconstruction Project, Bush Intercontinental Airport Rehabilitation, Houston Toyota Center, 2013 Fort Bend Mobility Bond Program and the $1.5 billion US 290 Reconstruction Project.\n" +
                "\n" +
                "We assist our clients by providing a comprehensive array of services aimed to facilitate construction from opening to final completion including Construction Management and Inspection Services, Scheduling and Mitigation Strategies, and Public Involvement and Community Outreach services. OTHON provides comprehensive constructability review for all design components and recommendation of the contractor’s schedule, troubleshooting field problems, review of contractor’s change orders, coordination with agencies and adjacent projects, and time impact analysis. \n" +
                "\n" +
                "Through effective management and coordination from project kick-off to close-out, our Construction Services team is committed to delivering projects on time and under budget."
        },
        {
            title: "Intelligent Transportation Systems Design",
            img: img6,
            text: "OTHON’s reputable construction management services have provided critical support in the delivery of many high-profile projects, including the $2.5 billion Katy Freeway Reconstruction Project, Bush Intercontinental Airport Rehabilitation, Houston Toyota Center, 2013 Fort Bend Mobility Bond Program and the $1.5 billion US 290 Reconstruction Project.\n" +
                "\n" +
                "We assist our clients by providing a comprehensive array of services aimed to facilitate construction from opening to final completion including Construction Management and Inspection Services, Scheduling and Mitigation Strategies, and Public Involvement and Community Outreach services. OTHON provides comprehensive constructability review for all design components and recommendation of the contractor’s schedule, troubleshooting field problems, review of contractor’s change orders, coordination with agencies and adjacent projects, and time impact analysis. \n" +
                "\n" +
                "Through effective management and coordination from project kick-off to close-out, our Construction Services team is committed to delivering projects on time and under budget."
        },
        {
            title: "Illumination",
            img: img5,
            text: "OTHON’s reputable construction management services have provided critical support in the delivery of many high-profile projects, including the $2.5 billion Katy Freeway Reconstruction Project, Bush Intercontinental Airport Rehabilitation, Houston Toyota Center, 2013 Fort Bend Mobility Bond Program and the $1.5 billion US 290 Reconstruction Project.\n" +
                "\n" +
                "We assist our clients by providing a comprehensive array of services aimed to facilitate construction from opening to final completion including Construction Management and Inspection Services, Scheduling and Mitigation Strategies, and Public Involvement and Community Outreach services. OTHON provides comprehensive constructability review for all design components and recommendation of the contractor’s schedule, troubleshooting field problems, review of contractor’s change orders, coordination with agencies and adjacent projects, and time impact analysis. \n" +
                "\n" +
                "Through effective management and coordination from project kick-off to close-out, our Construction Services team is committed to delivering projects on time and under budget."
        },
        {
            title: "Public Involvement",
            img: img5,
            text: "OTHON’s reputable construction management services have provided critical support in the delivery of many high-profile projects, including the $2.5 billion Katy Freeway Reconstruction Project, Bush Intercontinental Airport Rehabilitation, Houston Toyota Center, 2013 Fort Bend Mobility Bond Program and the $1.5 billion US 290 Reconstruction Project.\n" +
                "\n" +
                "We assist our clients by providing a comprehensive array of services aimed to facilitate construction from opening to final completion including Construction Management and Inspection Services, Scheduling and Mitigation Strategies, and Public Involvement and Community Outreach services. OTHON provides comprehensive constructability review for all design components and recommendation of the contractor’s schedule, troubleshooting field problems, review of contractor’s change orders, coordination with agencies and adjacent projects, and time impact analysis. \n" +
                "\n" +
                "Through effective management and coordination from project kick-off to close-out, our Construction Services team is committed to delivering projects on time and under budget."
        },

    ];


    let images = [img1, img2, img3, img5, img1, img6, img1];

    const handleCatClick = (cat: string, index: number) => {
        if (isTransitioning.current || cat === catSelected) return; // Якщо в процесі переходу або та сама категорія, нічого не робимо

        setSelectedCat(cat);
        const direction = index > prevCatIndex ? 'next' : 'prev';
        if (sliderRef.current) {
            direction === 'next' ? sliderRef.current.slideNext() : sliderRef.current.slidePrev();
        }
        setPrevCatIndex(index);

        // Встановлюємо прапорець переходу на true і збиваємо після завершення анімації
        isTransitioning.current = true;
        setTimeout(() => {
            isTransitioning.current = false;
        }, 500); // Тривалість повинна співпадати з анімацією
    };



    return (
        <div className={styles.services}>
            <p>Services</p>

            {data_for_cat.map((cat, index) => {
                const cardStyles = {
                    '--slider-bg-image': `url(${cat.img})`,
                } as React.CSSProperties;

                return (
                    <div className={styles.wrapper} key={index}>
                        <div className={styles.options}>
                            <Cat
                                name={cat.title}
                                isActive={cat.title === catSelected}
                                onClick={() => handleCatClick(cat.title, index)}
                            />
                            <div className={styles.nav}>
                                <img src={arrowBack} alt="Arrow"/>
                                <img src={arrowNext} alt="Arrow"/>
                            </div>
                        </div>
                        <div className={styles.slider} style={cardStyles}>

                            <p>{cat.text}</p>
                            <div className={styles.button}>
                                <Arrow />
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );


};

export default MobileServices;
