import styles from "./about.module.css";

export default function HeaderAbout() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Asosiasi Ekosistem <br /> Mobilitas Listrik
          </h1>
          <Swiper spaceBetween={20} slidesPerView={2.5} loop={true}>
            {photos.map((src, index) => (
              <SwiperSlide key={index}>
                <img
                  src={src}
                  alt={`Event ${index + 1}`}
                  className={`${styles.carouselImage} ${
                    index % 2 !== 0 ? styles.oddImage : styles.evenImage
                  }`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
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
