import CarouselHome from "./CarouselHome";
import HeaderHome from "./HeaderHome";
import LogoCompany from "./LogoCompany";
import Mitra from "./Mitra";
import NewsItem from "./NewsItem";
import Publikasi from "./Publikasi";
import Video from "./Video";

function HomePage() {
  return (
    <>
      <HeaderHome />
      <CarouselHome />
      <LogoCompany />
      <NewsItem />
      <Publikasi />
      <Video />
      <Mitra />
    </>
  );
}

export default HomePage;
