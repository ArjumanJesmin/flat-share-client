import AutoSlider from "@/components/HomePage/AutoSlider/AutoSlider";
import CoverSection from "@/components/HomePage/CoverSection/CoverSection";
import SearchArea from "@/components/HomePage/SearchArea/SearchArea";
import SendEmail from "@/components/HomePage/SendEmail/SendEmail";
import TestimonialsHomePage from "@/components/HomePage/Testimonials/TestimonialsHomePage";
import Tips from "@/components/HomePage/Testimonials/Tips";
import GalleryPage from "@/components/HomePage/galary/GallaryPage";

const HomePage = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <CoverSection />
      <AutoSlider />
      <SearchArea />
      <GalleryPage />
      <TestimonialsHomePage />
      <SendEmail />
      <Tips />
    </div>
  );
};

export default HomePage;
