import React from 'react';
import styles from "./Header.module.scss";
import Logo from "../../assets/images/logo.png"
import Button from "../Button/Button.tsx";
import MenuImg from "../../assets/images/menu.png"
import Menu from "../menu/Menu.tsx";
const Header = () => {
    return (
      <>
          <div className={styles.header_wrapper}>
              <div className="conteiner">

                <div className={styles.header_inner}>


                <div className={styles.logo}>
                    <img src={Logo} alt="Logo"/>
                </div>
              <div className={styles.menu}>
                  <li>
                      <a href="#">Home</a>
                  </li>
                  <li>
                      <a href="#">About</a>
                  </li>
                  <li>
                      <a href="#">Services</a>
                  </li>
                  <li>
                      <a href="#">Careers</a>
                  </li>
              </div>
              <div className={styles.button_contact}>
                  <Button text={'Contact Us'} />
              </div>
                    <div className={styles.menu_burger}>
                        <Menu />
                    </div>

                </div>
              </div>
          </div>
      </>
    );
};

export default Header;