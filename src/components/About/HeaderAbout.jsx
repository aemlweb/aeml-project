import styles from "./about.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

export default function HeaderAbout() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Asosiasi Ekosistem <br /> Mobilitas Listrik
          </h1>
          <p className={styles.heroSubtitle}>
            Katalis pengembangan ekosistem mobilitas listrik kelas dunia di
            Indonesia.
          </p>
        </div>
      </div>

      {/* Bagian tombol */}
      <div className={styles.heroButtons}>
        <button className={styles.btnPrimary}>Tentang AEML</button>
        <button className={styles.btnSecondary}>Kegiatan</button>
      </div>
    </div>
  );
}
