import React from "react";
import styles from "./publikasi.module.css";

const publications = [
  {
    id: 1,
    title: "Indonesia’s Electric Vehicle Outlook",
    subtitle: "Supercharging Tomorrow’s Mobility",
    date: "5 Juli 2023",
    type: "Research",
    image:
      "https://blogger.googleusercontent.com/img/a/AVvXsEjD4Am0Rt5p9w7JySwtD7jWFAWWZG4-jJuGhMtfm6YhyaaMwDkN4wk4I9K-waVb-0GgTu37Ss6zG4JpJSP7yv6WFWlLeMyBr7HykFxpf0QnVC53WJZ_iYoV05VphR0G7nOeYv8OXg9LBXJ_Ab1uhDxuRVde-Is301aSx2Cn9zT8N-9_fz-L7QRJogrDz1I",
  },
  {
    id: 2,
    title: "Electrifying Indonesia’s Two-Wheeler Industry",
    subtitle: "",
    date: "20 November 2022",
    type: "Publication",
    image:
      "https://blogger.googleusercontent.com/img/a/AVvXsEjD4Am0Rt5p9w7JySwtD7jWFAWWZG4-jJuGhMtfm6YhyaaMwDkN4wk4I9K-waVb-0GgTu37Ss6zG4JpJSP7yv6WFWlLeMyBr7HykFxpf0QnVC53WJZ_iYoV05VphR0G7nOeYv8OXg9LBXJ_Ab1uhDxuRVde-Is301aSx2Cn9zT8N-9_fz-L7QRJogrDz1I",
  },
  {
    id: 3,
    title: "Transforming Indonesia’s Transportation",
    subtitle: "Accelerating EV Adoption for Two and Four-Wheelers",
    date: "10 Juni 2025",
    type: "Publication",
    image:
      "https://blogger.googleusercontent.com/img/a/AVvXsEjD4Am0Rt5p9w7JySwtD7jWFAWWZG4-jJuGhMtfm6YhyaaMwDkN4wk4I9K-waVb-0GgTu37Ss6zG4JpJSP7yv6WFWlLeMyBr7HykFxpf0QnVC53WJZ_iYoV05VphR0G7nOeYv8OXg9LBXJ_Ab1uhDxuRVde-Is301aSx2Cn9zT8N-9_fz-L7QRJogrDz1I",
  },
  {
    id: 4,
    title: "Indonesia’s Electric Vehicle Outlook",
    subtitle: "Supercharging Tomorrow’s Mobility",
    date: "5 Juli 2023",
    type: "Research",
    image:
      "https://blogger.googleusercontent.com/img/a/AVvXsEjD4Am0Rt5p9w7JySwtD7jWFAWWZG4-jJuGhMtfm6YhyaaMwDkN4wk4I9K-waVb-0GgTu37Ss6zG4JpJSP7yv6WFWlLeMyBr7HykFxpf0QnVC53WJZ_iYoV05VphR0G7nOeYv8OXg9LBXJ_Ab1uhDxuRVde-Is301aSx2Cn9zT8N-9_fz-L7QRJogrDz1I",
  },
  {
    id: 5,
    title: "Electrifying Indonesia’s Two-Wheeler Industry",
    subtitle: "",
    date: "20 November 2022",
    type: "Research",
    image:
      "https://blogger.googleusercontent.com/img/a/AVvXsEjD4Am0Rt5p9w7JySwtD7jWFAWWZG4-jJuGhMtfm6YhyaaMwDkN4wk4I9K-waVb-0GgTu37Ss6zG4JpJSP7yv6WFWlLeMyBr7HykFxpf0QnVC53WJZ_iYoV05VphR0G7nOeYv8OXg9LBXJ_Ab1uhDxuRVde-Is301aSx2Cn9zT8N-9_fz-L7QRJogrDz1I",
  },
  {
    id: 6,
    title: "Transforming Indonesia’s Transportation",
    subtitle: "Accelerating EV Adoption for Two and Four-Wheelers",
    date: "10 Juni 2025",
    type: "Publication",
    image:
      "https://blogger.googleusercontent.com/img/a/AVvXsEjD4Am0Rt5p9w7JySwtD7jWFAWWZG4-jJuGhMtfm6YhyaaMwDkN4wk4I9K-waVb-0GgTu37Ss6zG4JpJSP7yv6WFWlLeMyBr7HykFxpf0QnVC53WJZ_iYoV05VphR0G7nOeYv8OXg9LBXJ_Ab1uhDxuRVde-Is301aSx2Cn9zT8N-9_fz-L7QRJogrDz1I",
  },
];

export default function Content() {
  return (
    <div className={styles.container}>
      {publications.map((pub) => (
        <div key={pub.id} className={styles.card}>
          <img src={pub.image} alt={pub.title} className={styles.image} />
          <div className={styles.meta}>
            <span
              className={`${styles.badge} ${
                pub.type === "Research" ? styles.research : styles.publication
              }`}
            >
              {pub.type}
            </span>
            <h3 className={styles.title}>{pub.title}</h3>
            {/* {pub.subtitle && <p className={styles.subtitle}>{pub.subtitle}</p>} */}
            <div className={styles.bottomCard}>
              <p className={styles.date}>{pub.date}</p>
              <button className={styles.downloadBtn}>Download</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
