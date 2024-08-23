import HeroSection from "@/components/HomePage/HeroSection/HeroSection";
import Image from "next/image";
import flatImage from "@/assets/slider-1.jpg";

const HeroSectionPage = () => {
  return (
    <div>
      <section className="relative mb-30 h-[400px]">
        {/* Background Image */}
        <div className="absolute inset-0 ">
          <Image
            alt="Background Image"
            src={flatImage}
            quality={100}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
          <div className="absolute inset-0 bg-secondary-light1 opacity-30"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 flex flex-col items-start text-left text-secondary-main p-6">
          <h1 className="text-4xl font-bold mb-6">
            Discover Your Ideal <br /> Living Space Today!
          </h1>
          <p className="my-4 text-slate-600">
            A sleek, minimalist flat design website focused on <br /> clean
            aesthetics and intuitive user experience.
          </p>
        </div>
      </section>
      <HeroSection />
    </div>
  );
};

export default HeroSectionPage;
