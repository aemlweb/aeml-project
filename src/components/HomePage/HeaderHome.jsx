import styles from "./homepage.module.css";

export default function HeaderHome() {
  return (
    <div className={styles.heroWrapper}>
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
