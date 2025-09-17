// ScrollNavigation.jsx
import React, { useState, useEffect, useRef } from "react";
import styles from "./about.module.css";
import visi1 from "../../assets/visi1.png";
import visi2 from "../../assets/visi2.png";
import profil from "../../assets/foto-profil.png";

const ScrollNavigation = () => {
  const [activeSection, setActiveSection] = useState("tentang-aeml");
  const sectionsRef = useRef({});

  const menuItems = [
    { id: "visi", label: "Visi AEML", icon: "🎯" },
    { id: "misi", label: "Misi AEML", icon: "🎯" },
    { id: "perjalanan-bersama", label: "Perjalanan Bersama", icon: "🤝" },
    { id: "tentang-aeml", label: "Tentang AEML", icon: "📋" },
    { id: "pimpinan-aeml", label: "Pimpinan AEML", icon: "👥" },
    { id: "perusahaan-anggota", label: "Perusahaan Anggota", icon: "🏢" },
    { id: "mitra-pemerintahan", label: "Mitra Pemerintahan", icon: "🏛️" },
    { id: "mitra-pembangunan", label: "Mitra Pembangunan", icon: "🔧" },
  ];

  // Handle scroll to section
  const scrollToSection = (sectionId) => {
    const element = sectionsRef.current[sectionId];
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
      setActiveSection(sectionId);
    }
  };

  // Handle scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const item of menuItems) {
        const element = sectionsRef.current[item.id];
        if (element) {
          const elementTop = element.offsetTop;
          const elementBottom = elementTop + element.offsetHeight;

          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuItems]);

  const renderSectionContent = (item) => {
    switch (item.id) {
      case "tentang-aeml":
        return (
          <div>
            <p className={styles.text}>
              AEML berperan sebagai wadah industri, pusat pemikiran, serta
              advokat kebijakan publik yang mendorong terciptanya ekosistem
              mobilitas listrik yang berdaya saing global. Melalui sinergi
              lintas sektor, asosiasi ini berkomitmen untuk mempercepat adopsi
              kendaraan listrik, memperkuat rantai pasok domestik, serta
              mendukung transisi menuju energi bersih dan transportasi
              berkelanjutan di Indonesia.
            </p>
          </div>
        );

      case "visi":
        return (
          <div className={styles.grid}>
            <div className={styles.cardGreen}>
              <div className={styles.visi}>
                <div className={styles.leftVisi}>
                  <img src={visi2} className={styles.iconVisi}></img>
                  <p className={styles.text}>
                    Mendukung adopsi kendaraan listrik dan mendorong terciptanya
                    ekosistem kendaraan listrik yang berdaya saing global
                  </p>
                </div>
                <div className={styles.rightVisi}>
                  <img src={visi1} className={styles.iconVisi}></img>
                  <p className={styles.text}>
                    Memberikan suara kepada anggota dan membina kemitraan yang
                    membangun rantai nilai domestik yang kuat, serta kolaborasi
                    dengan semua pemangku kepentingan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case "misi":
        return (
          <div className={styles.grid}>
            <div className={styles.visi}>
              <p className={styles.text}>
                Misi kami untuk mendorong terciptanya mobilitas listrik di
                Indonesia didasarkan pada panggilan untuk melindungi lingkungan
                dengan mengurangi polusi di mana masyarakat tinggal, bekerja,
                belajar, juga bermain.
                <br></br>
                <br></br>
                Dengan berkontribusi pada inisiatif Pemerintah Republik
                Indonesia dalam mengatasi perubahan iklim, kami juga secara
                langsung mendukung kemandirian energi bangsa. Dengan demikian,
                kami akan mencapai visi kami untuk mendukung adopsi kendaraan
                listrik dan mendorong terciptanya ekosistem mobilitas listrik
                yang berdaya saing global.
              </p>
            </div>
          </div>
        );

      case "perjalanan-bersama":
        return (
          <div className={styles.grid}>
            <div className={styles.way}>
              <img src={profil} className={styles.photoWay}></img>
              <p className={styles.text}>
                Asosiasi Ekosistem Mobilitas Listrik (AEML) didirikan pada tahun
                2022 sebagai respons atas kebutuhan mendesak untuk mempercepat
                adopsi kendaraan listrik di Indonesia serta membangun ekosistem
                mobilitas listrik yang terintegrasi. <br></br> <br></br>Sejak
                awal terbentuk, AEML hadir sebagai wadah kolaborasi yang
                menyatukan beragam pemangku kepentingan—mulai dari produsen
                kendaraan, penyedia baterai, penyelenggara infrastruktur
                pengisian dan tukar baterai, perusahaan transportasi berbasis
                aplikasi, hingga lembaga keuangan. <br></br>
                <br></br>
                Berawal dari lima perusahaan perintis, kini AEML telah
                berkembang menjadi asosiasi dengan dua puluh anggota, dan jumlah
                ini terus bertambah. <br></br> <br></br>Dengan status sebagai
                anggota di dua Komite Teknis Badan Standardisasi Nasional (BSN)
                serta Anggota Luar Biasa Kamar Dagang dan Industri Indonesia
                (KADIN), AEML juga menjalin kerja sama erat dengan berbagai
                kementerian, pusat kajian, dan lembaga riset. <br></br>{" "}
                <br></br>Komitmen kami jelas: menjadi katalis dalam mendorong
                regulasi yang kondusif, memperkuat rantai pasok nasional, serta
                mempercepat transisi menuju mobilitas berkelanjutan di
                Indonesia.
              </p>
            </div>
          </div>
        );

      default:
        return (
          <div>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className={styles.text}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>

            <div className={styles.features}>
              {[1, 2, 3].map((card) => (
                <div key={card} className={styles.featureCard}>
                  <div className={styles.featureIcon}>
                    <span className={styles.featureNumber}>{card}</span>
                  </div>
                  <h4 className={styles.featureTitle}>Feature {card}</h4>
                  <p className={styles.featureDesc}>
                    Brief description of this feature or benefit.
                  </p>
                </div>
              ))}
            </div>
          </div>
        );
    }
  };

  return (
    <div className={styles.container}>
      {/* Left Sidebar Navigation */}
      <div className={styles.sidebar}>
        <div className={styles.sidebarContent}>
          <nav className={styles.menu}>
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`${styles.menuItem} ${
                  activeSection === item.id ? styles.active : ""
                }`}
              >
                <span className={styles.label}>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.content}>
        {/* Header */}
        <header className={styles.header}>
          <h1 className={styles.mainTitle}>
            Asosiasi Ekosistem Mobilitas Listrik
          </h1>
          <p className={styles.description}>
            Asosiasi Ekosistem Mobilitas Listrik (AEML) adalah sebuah forum
            kolaboratif yang mempertemukan para pemangku kepentingan utama dalam
            pengembangan kendaraan listrik di Indonesia, mulai dari produsen
            kendaraan, penyedia baterai, infrastruktur pengisian daya, hingga
            pelaku teknologi digital dan keuangan.
            <br></br>
            <br></br>
            AEML berperan sebagai wadah industri, pusat pemikiran, serta advokat
            kebijakan publik yang mendorong terciptanya ekosistem mobilitas
            listrik yang berdaya saing global. Melalui sinergi lintas sektor,
            asosiasi ini berkomitmen untuk mempercepat adopsi kendaraan listrik,
            memperkuat rantai pasok domestik, serta mendukung transisi menuju
            energi bersih dan transportasi berkelanjutan di Indonesia.
          </p>
        </header>

        {/* Sections */}
        {menuItems.map((item) => (
          <section
            key={item.id}
            ref={(el) => (sectionsRef.current[item.id] = el)}
            className={styles.section}
          >
            <div className={styles.sectionCard}>
              <h2 className={styles.sectionTitle}>{item.label}</h2>
              {renderSectionContent(item)}
            </div>
          </section>
        ))}

        {/* Footer spacer */}
        <div className={styles.footer}></div>
      </div>
    </div>
  );
};

export default ScrollNavigation;
