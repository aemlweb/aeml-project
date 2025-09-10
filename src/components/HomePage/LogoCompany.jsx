// AEMLAnimatedLogos.jsx
import React, { useState } from "react";
import styles from "./homepage.module.css";
import pertaminaLogo from "../../assets/logos/pertamina-logo.png";
import tbsLogo from "../../assets/logos/tbs-logo.png";
import plnLogo from "../../assets/logos/pln-logo.png";
import electrumLogo from "../../assets/logos/electrum-logo.png";
import ibcLogo from "../../assets/logos/ibc-logo.png";
import vktrLogo from "../../assets/logos/vktr-logo.png";
import voltaLogo from "../../assets/logos/volta-logo.png";
import casionLogo from "../../assets/logos/casion-logo.png";
import grabLogo from "../../assets/logos/grab-logo.png";
import gotoLogo from "../../assets/logos/goto-logo.png";
import dbsLogo from "../../assets/logos/dbs-logo.png";
import gesitsLogo from "../../assets/logos/gesits-logo.png";
import alvaLogo from "../../assets/logos/alva-logo.png";

const LogoCompany = () => {
  const [hoveredLogo, setHoveredLogo] = useState(null);

  const firstRowLogos = [
    {
      name: "ALVA",
      image: alvaLogo,
      alt: "ALVA Logo",
    },
    { name: "PERTAMINA", style: "pertamina", image: pertaminaLogo },
    { name: "TBS", style: "tbs", image: tbsLogo },
    { name: "PLN", style: "pln", image: plnLogo },
    { name: "electrum", style: "electrum", image: electrumLogo },
    { name: "IBC", style: "ibc", image: ibcLogo },
    { name: "VKTR", style: "vktr", image: vktrLogo },
  ];

  const secondRowLogos = [
    { name: "VOLTA", style: "volta", image: voltaLogo },
    { name: "GASION", style: "gasion", image: casionLogo },
    { name: "Grab", style: "grab", image: grabLogo },
    { name: "goto", style: "goto", image: gotoLogo },
    { name: "DBS", style: "dbs", image: dbsLogo },
    { name: "GESITS", style: "gesits", image: gesitsLogo },
  ];

  const renderLogoTrack = (logos, direction) => (
    <div className={styles.logoRow}>
      <div
        className={`${styles.logoTrack} ${
          direction === "left" ? styles.moveLeft : styles.moveRight
        }`}
      >
        {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
          <div
            key={`${logo.name}-${index}`}
            className={styles.logoItem}
            onMouseEnter={() => setHoveredLogo(`${logo.name}-${index}`)}
            onMouseLeave={() => setHoveredLogo(null)}
          >
            <img src={logo.image} alt={logo.alt} className={styles.logoImage} />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <h1 className={styles.titleLogo}>Perusahaan anggota AEML</h1>

        {/* First row - moving left */}
        {renderLogoTrack(firstRowLogos, "left")}

        {/* Second row - moving right */}
        {renderLogoTrack(secondRowLogos, "right")}
      </div>
    </div>
  );
};

export default LogoCompany;
