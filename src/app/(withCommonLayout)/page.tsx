import CoverSection from "@/components/HomePage/CoverSection/CoverSection";
import HeroSection from "@/components/HomePage/HeroSection/HeroSection";
import SearchArea from "@/components/HomePage/SearchArea/SearchArea";
import GalleryPage from "@/components/HomePage/galary/GallaryPage";
import FooterGrid from "@/components/shared/Footer/FooterGrid";
import Navbar from "@/components/shared/Navbar/Navbar";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <CoverSection />
      <SearchArea />
      <HeroSection />
      <GalleryPage />
      <FooterGrid />
    </>
  );
};

export default HomePage;
