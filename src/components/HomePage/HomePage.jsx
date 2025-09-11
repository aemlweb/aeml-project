import Feedback from "../Feedback/Feedback";
import CarouselHome from "./CarouselHome";
import HeaderHome from "./HeaderHome";
import LogoCompany from "./LogoCompany";
import Mitra from "./Mitra";
import NewsItem from "./NewsItem";
import Publikasi from "./Publikasi";
import Video from "./Video";
import React, { useState } from "react";

function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  return (
    <>
      <HeaderHome />
      <CarouselHome />
      <LogoCompany />
      <NewsItem />
      <Publikasi />
      <Video />
      <Mitra />
      <Feedback
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />{" "}
    </>
  );
}

export default HomePage;
