import KegiatanHero from "./KegiatanHero";
import styles from "./KegiatanPages.module.css";
import NewsGrid from "./NewsGrid";

const KegiatanPages = () => {
  const sampleActivities = [
    {
      id: 1,
      title: "Judul 1",
      date: "5 Juli 2023",
      image: "https://picsum.photos/id/1011/400/300",
    },
    {
      id: 2,
      title: "Judul 2",
      date: "5 Juli 2023",
      image: "https://picsum.photos/id/1015/400/300",
    },
    {
      id: 3,
      title: "Judul 3",
      date: "5 Juli 2023",
      image: "https://picsum.photos/id/1016/400/300",
    },
    {
      id: 4,
      title: "Judul 4",
      date: "5 Juli 2023",
      image: "https://picsum.photos/id/1025/400/300",
    },
    {
      id: 5,
      title: "Judul 5",
      date: "5 Juli 2023",
      image: "https://picsum.photos/id/1027/400/300",
    },
    {
      id: 6,
      title: "Judul 6",
      date: "5 Juli 2023",
      image: "https://picsum.photos/id/1031/400/300",
    },
    {
      id: 7,
      title: "Judul 7",
      date: "5 Juli 2023",
      image: "https://picsum.photos/id/1033/400/300",
    },
    {
      id: 8,
      title: "Judul 8",
      date: "5 Juli 2023",
      image: "https://picsum.photos/id/1035/400/300",
    },
    {
      id: 9,
      title: "Judul 9",
      date: "5 Juli 2023",
      image: "https://picsum.photos/id/1037/400/300",
    },
  ];
  return (
    <div className={styles.kegiatanPages}>
      <KegiatanHero />

      <div className={styles.content}>
        <h2 className={styles.sectionTitle}>Kegiatan AEML</h2>
        {/* Activity cards will be added here later */}
      </div>
      <NewsGrid items={sampleActivities} />
    </div>
  );
};

export default KegiatanPages;
