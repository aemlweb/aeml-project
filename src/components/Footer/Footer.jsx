import React from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/logo-aeml.png";

const Footer = () => {
  const footerData = {
    logo: {
      src: logo,
      alt: "AEML - Aliansi Elektrifikasi Mobilitas Listrik",
    },
    contact: {
      email: "info@aeml.or.id",
      address: "Treasury Tower, 33rd Floor, District 8 SCBD Lot. 28",
    },
    navigation: {
      "Tentang AEML": [
        { label: "Sejarah", href: "/tentang/sejarah" },
        { label: "Visi", href: "/tentang/visi" },
        { label: "Struktur", href: "/tentang/struktur" },
        { label: "Anggota", href: "/tentang/anggota" },
      ],
      Berita: [
        { label: "Artikel", href: "/berita/artikel" },
        { label: "Kegiatan", href: "/berita/kegiatan" },
      ],
      Publikasi: [
        { label: "Edaran", href: "/publikasi/edaran" },
        { label: "Aturan", href: "/publikasi/aturan" },
      ],
      Kontak: [{ label: "Media Sosial", href: "/kontak/media-sosial" }],
    },
  };

  return (
    <footer className={styles.footer}>
      {/* Decorative curved background */}
      {/* <div className={styles.curvedBackground}>
        <svg viewBox="0 0 1400 200" className={styles.curveSvg}>
          <path
            d="M0,100 Q350,20 700,100 T1400,100 L1400,200 L0,200 Z"
            fill="rgba(76, 175, 80, 0.3)"
          />
        </svg>
      </div> */}

      <div className={styles.footerContent}>
        {/* Left Section - Logo and Contact */}
        <div className={styles.leftSection}>
          <div className={styles.logoSection}>
            <img
              src={footerData.logo.src}
              alt={footerData.logo.alt}
              className={styles.footerLogo}
            />
          </div>

          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <svg viewBox="0 0 24 24" className={styles.contactIcon}>
                <path
                  d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                  fill="currentColor"
                />
              </svg>
              <span>{footerData.contact.email}</span>
            </div>

            <div className={styles.contactItem}>
              <svg viewBox="0 0 24 24" className={styles.contactIcon}>
                <path
                  d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                  fill="currentColor"
                />
              </svg>
              <span>{footerData.contact.address}</span>
            </div>
          </div>
        </div>

        {/* Right Section - Navigation Links */}
        <div className={styles.rightSection}>
          <div className={styles.navGrid}>
            {Object.entries(footerData.navigation).map(([category, links]) => (
              <div key={category} className={styles.navColumn}>
                <h3 className={styles.navTitle}>{category}</h3>
                <ul className={styles.navList}>
                  {links.map((link, index) => (
                    <li key={index} className={styles.navItem}>
                      <a href={link.href} className={styles.navLink}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
