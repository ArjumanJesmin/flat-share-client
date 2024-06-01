import CoverSection from "@/components/HomePage/CoverSection/CoverSection";
import HeroSection from "@/components/HomePage/HeroSection/HeroSection";
import SearchArea from "@/components/HomePage/SearchArea/SearchArea";
import Testimonials from "@/components/HomePage/Testimonials/Testimonials";
import Tips from "@/components/HomePage/Testimonials/Tips";
import GalleryPage from "@/components/HomePage/galary/GallaryPage";
import FooterGrid from "@/components/shared/Footer/FooterGrid";
import Navbar from "@/components/shared/Navbar/Navbar";

const HomePage = () => {
  return (
    <div className="gap-5">
      <Navbar />
      <CoverSection />
      <SearchArea />
      <HeroSection />
      <GalleryPage />
      <Testimonials />
      <Tips />
      <FooterGrid />
    </div>
  );
};

export default HomePage;
