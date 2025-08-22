import React from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/aemllogo.png";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.containerMargin}>
        <ul className={styles.navLinks}>
          <li>
            <a href="#home">Tentang AEML</a>
          </li>
          <li>
            <a href="#about">Artikel</a>
          </li>
          <li>
            <a href="#services">Publikasi</a>
          </li>
        </ul>
        <div className={styles.logo}>
          <img src={logo} className={styles.img}></img>
        </div>
        <div className={styles.end}>
          <button className={styles.button}>Kontak</button>
          <button className={styles.buttonLang}>ID 🇮🇩</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
