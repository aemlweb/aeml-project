import HeaderAbout from "./HeaderAbout";
import ScrollNavigation from "./ScrollNavigation";
import styles from "./about.module.css";

function About() {
  return (
    <div className={styles.aboutPageWrapper}>
      <HeaderAbout />
      <ScrollNavigation />
    </div>
  );
}

export default About;
