import React from "react";
import styles from "./publikasi.module.css";
import cover from "../../assets/publication_cover.png";

export default function Header() {
  return (
    <div className={styles.headerParent}>
      <div className={styles.banner}>
        <img
          src={cover}
          alt="Banner EV Charging"
          className={styles.bannerImage}
        />
      </div>

      <div className={styles.content}>
        <div className={styles.badges}>
          <span className={styles.dot}></span>
          Diperbaharui 5 hari yang lalu
        </div>
        <h2 className={styles.title}>Publikasi</h2>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet. Disini ada sedikit penjelasan atau brief
          sebelum masuk publikasi, max 2 line
        </p>
      </div>
    </div>
  );
}
