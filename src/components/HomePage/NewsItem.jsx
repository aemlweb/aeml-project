import React from "react";
import styles from "./homepage.module.css";

const NewsItem = () => {
  const newsItems = [
    {
      id: 1,
      title: "Insert teks judul disini maks. 2 baris.",
      preview:
        "Preview kalimat awal dari artikelnya, bisa maksimal 2 baris aja, tidak lebih.",
      date: "5 Juli 2023",
      image: "https://picsum.photos/id/1011/800/500",
      featured: true,
    },
    {
      id: 2,
      title: "Insert teks judul disini maks. 2 baris",
      date: "5 Juli 2023",
      image: "https://picsum.photos/id/1015/800/500",
    },
    {
      id: 3,
      title: "Insert teks judul disini maks. 2 baris",
      date: "5 Juli 2023",
      image: "https://picsum.photos/id/1016/800/500",
    },
    {
      id: 4,
      title: "Insert teks judul disini maks. 2 baris",
      date: "5 Juli 2023",
      image: "https://picsum.photos/id/1025/800/500",
    },
    {
      id: 5,
      title: "Insert teks judul disini maks. 2 baris",
      date: "5 Juli 2023",
      image: "https://picsum.photos/id/1016/800/500",
    },
  ];

  return (
    <div className={styles.containerNews}>
      <div className={styles.header}>
        <h1 className={styles.titleNews}>Kegiatan</h1>
        <a href="#" className={styles.readMore}>
          Baca selengkapnya →
        </a>
      </div>

      <div className={styles.newsGrid}>
        <div className={styles.featuredArticle}>
          <div className={styles.featuredCard}>
            <div className={styles.featuredImageContainer}>
              <img
                src={newsItems[0].image}
                alt={newsItems[0].title}
                className={styles.featuredImage}
              />
            </div>
            <div className={styles.featuredContent}>
              <h2 className={styles.featuredTitle}>{newsItems[0].title}</h2>
              <p className={styles.featuredPreview}>{newsItems[0].preview}</p>
              <p className={styles.featuredDate}>{newsItems[0].date}</p>
            </div>
          </div>
        </div>

        <div className={styles.regularGrid}>
          {newsItems.slice(1).map((item) => (
            <div key={item.id} className={styles.regularCard}>
              <div className={styles.regularImageContainer}>
                <img
                  src={item.image}
                  alt={item.title}
                  className={styles.regularImage}
                />
              </div>
              <div className={styles.regularContent}>
                <h3 className={styles.regularTitle}>{item.title}</h3>
                <p className={styles.regularDate}>{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
