import React from 'react';
import Header from "../../components/Header/Header.tsx";
import Landing from "../../components/Landing/Landing.tsx";
import Card from "../../components/Card/Card.tsx";
import styles from "./Home.module.scss";
import img1 from "../../assets/images/img1.png"
import img2 from "../../assets/images/img2.png"
import img3 from "../../assets/images/img3.png"
import img4 from "../../assets/images/img4.png"
import img5 from "../../assets/images/img5.png"
import img6 from "../../assets/images/img6.png"
import About from "../../components/About/About.tsx";
import Story from "../../components/Story/Story.tsx";
import Services from "../../components/Services/Services.tsx";
import Footer from "../../components/Footer/Footer.tsx";
import Careers from "../../components/Carrers/Careers.tsx";
const Home = () => {
    return (
       <>
        <Header />

               <Landing />
            <div className="conteiner">


                <div className={styles.cards}>
                        <Card title={<>Highways &<br />
                            Roads</>} hoverImg={img1} />
                    <Card title={<>Transportation<br/>
                        Planning</>} hoverImg={img2} />
                    <Card title={<>Design<br/>
                        Build Services</>} hoverImg={img3} />
                    <Card title={<>Water</>} hoverImg={img4} />
                    <Card title={<>Bridges</>} hoverImg={img5} />
                    <Card title={<>Construction<br />
                        Services</>} hoverImg={img6} />
                </div>
                <About />
                <Story />
                <Services />

            </div>
           <Careers />
           <Footer />
       </>
    );
};

export default Home;