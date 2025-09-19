import React from "react";
import styles from "./homepage.module.css";

const Publikasi = () => {
  const publications = [
    {
      id: 1,
      image: "https://picsum.photos/id/1011/800/500",
      title: "Indonesia's electric vehicle outlook maksimum 3 line.",
      readText: "Baca Publikasi",
    },
    {
      id: 2,
      image: "https://picsum.photos/id/1011/800/500",
      title: "Electrifying Indonesia's Two-Wheeler Industry",
      readText: "Baca Publikasi",
    },
    {
      id: 3,
      image: "https://picsum.photos/id/1011/800/500",
      title: "Transforming Indonesia's Transportation",
      readText: "Baca Publikasi",
    },
  ];

  return (
    <div className={styles.publicationsSection}>
      <div className={styles.publicationsHeader}>
        <h2 className={styles.publicationsTitle}>Publikasi</h2>
        <a href="#" className={styles.viewAllLink}>
          Baca selengkapnya →
        </a>
      </div>

      <div className={styles.publicationsGrid}>
        {publications.map((pub) => (
          <div key={pub.id} className={styles.publicationCard}>
            <div className={styles.cardContain}>
              <div className={styles.cardImage}>
                <img src={pub.image} alt={pub.title} />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{pub.title}</h3>
              </div>
            </div>
            <button className={styles.btnRead}>Baca Publikasi</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Publikasi;
