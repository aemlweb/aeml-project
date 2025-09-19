import Feedback from "../Feedback/Feedback";
import CarouselHome from "./CarouselHome";
import FeedbackHome from "./FeedbackHome";
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
      <FeedbackHome />
      {/* <Feedback
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />{" "} */}
    </>
  );
}

export default HomePage;
