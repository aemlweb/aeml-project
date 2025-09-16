import React, { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import logo from "../../assets/aemllogo.png";
import logobrowse from "../../assets/image-rils.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.containerMargin}>
        <ul className={styles.navLinks}>
          <li>
            <div className={styles.about}>
              Tentang AEML
              <svg
                width="8"
                height="6"
                viewBox="0 0 8 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.06 0.530273L4 3.58361L0.94 0.530273L0 1.47027L4 5.47027L8 1.47027L7.06 0.530273Z"
                  fill="#181818"
                />
              </svg>{" "}
            </div>{" "}
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
          <button className={styles.button}>
            <img src={logobrowse} alt="" className={styles.icon} />
            Infomolis.id
          </button>{" "}
          <button className={styles.buttonLang}>Gabung AEML</button>
          <button className={styles.buttonId}>
            ID
            <svg
              width="8"
              height="6"
              viewBox="0 0 8 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.06 0.530273L4 3.58361L0.94 0.530273L0 1.47027L4 5.47027L8 1.47027L7.06 0.530273Z"
                fill="#181818"
              />
            </svg>{" "}
          </button>{" "}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
