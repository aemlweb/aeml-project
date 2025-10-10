import { useRef, useState } from "react";
import styles from "./homepage.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import foto1 from "../../assets/foto1.png";
import foto2 from "../../assets/foto3new.png";
import foto4 from "../../assets/amelpic.jpg";
import foto5 from "../../assets/fotoasset1.jpg";

const photos = [foto1, foto4, foto2, foto5];

export default function CarouselHome() {
  const swiperRef = useRef(null);
  const containerRef = useRef(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorVisible, setCursorVisible] = useState(false);
  const [cursorDirection, setCursorDirection] = useState("");

  const handleMouseMove = (e) => {
    // Update cursor position
    setCursorPos({ x: e.clientX, y: e.clientY });

    // Use cached rect if available, or get it once
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const halfWidth = rect.width / 2;

    const newDirection = mouseX < halfWidth ? "prev" : "next";

    // Only update state if direction actually changed
    if (newDirection !== cursorDirection) {
      setCursorDirection(newDirection);
    }
  };

  const handleMouseEnter = () => {
    setCursorVisible(true);
  };

  const handleMouseLeave = () => {
    setCursorVisible(false);
    setCursorDirection("");
  };

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const halfWidth = rect.width / 2;

    if (swiperRef.current) {
      if (mouseX < halfWidth) {
        swiperRef.current.slidePrev();
      } else {
        swiperRef.current.slideNext();
      }
    }
  };

  const renderCursorIcon = () => {
    if (cursorDirection === "prev") {
      return (
        <svg
          width="12"
          height="19"
          viewBox="0 0 12 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.24081 0.830078L11.3359 2.9252L4.5305 9.7455L11.3359 16.5658L9.24081 18.6609L0.325391 9.7455L9.24081 0.830078Z"
            fill="#181818"
          />
        </svg>
      );
    } else if (cursorDirection === "next") {
      return (
        <svg
          width="12"
          height="19"
          viewBox="0 0 12 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ transform: "rotate(180deg)" }}
        >
          <path
            d="M9.24081 0.830078L11.3359 2.9252L4.5305 9.7455L11.3359 16.5658L9.24081 18.6609L0.325391 9.7455L9.24081 0.830078Z"
            fill="#181818"
          />
        </svg>
      );
    } else {
      return null;
    }
  };

  return (
    <div className={styles.containerCarousel}>
      {/* Left content */}
      <div className={styles.left}>
        <h2 className={styles.titleCarousel}>
          Untuk ekosistem <br /> yang lebih sehat <br /> dan maju.
        </h2>
        <p className={styles.description}>
          AEML adalah forum kolaboratif yang mempertemukan para pemangku
          kepentingan utama dalam pengembangan kendaraan listrik di Indonesia.
        </p>

        <div className={styles.stats}>
          <div className={styles.card}>
            <h3>20</h3>
            <p>anggota perusahaan</p>
          </div>
          <div className={styles.card}>
            <h3>2022</h3>
            <p>awal berdiri</p>
          </div>
        </div>
      </div>

      {/* Right carousel */}
      <div
        ref={containerRef}
        className={styles.right}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        {/* Custom Cursor */}
        <div
          className={`${styles.customCursor} ${
            !cursorVisible ? styles.hidden : ""
          }`}
          style={{
            left: `${cursorPos.x}px`,
            top: `${cursorPos.y}px`,
          }}
        >
          {renderCursorIcon()}
        </div>

        <Swiper
          spaceBetween={20}
          slidesPerView={2.5}
          loop={true}
          modules={[Pagination]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            768: {
              slidesPerView: 3.5,
            },
          }}
        >
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
      </div>
    </div>
  );
}
