// pages/gallery.tsx

import Image from "next/image";
import one from "@/assets/galary/first.jpg";
import two from "@/assets/galary/two.jpg";
import three from "@/assets/galary/three.jpg";
import four from "@/assets/galary/four.jpg";
import five from "@/assets/galary/five.jpg";
import six from "@/assets/galary/six.jpg";
import seven from "@/assets/galary/seven.jpg";
import eight from "@/assets/galary/eight.jpg";
import TitleWithSubtitle from "@/components/utils/TitleWithSubtitle";

const GalleryPage: React.FC = () => {
  const images = [
    { src: one, alt: "One Image", width: 350, height: 100 },
    { src: two, alt: "Two Image", width: 350, height: 100 },
    { src: three, alt: "Three Image", width: 350, height: 100 },
    { src: four, alt: "Four Image", width: 350, height: 100 },
    { src: five, alt: "One Image", width: 350, height: 100 },
    { src: six, alt: "Two Image", width: 350, height: 100 },
    { src: seven, alt: "Three Image", width: 350, height: 100 },
    { src: eight, alt: "Four Image", width: 350, height: 100 },
  ];

  return (
    <section className="container mx-auto py-20 gradient-text shadow-lg">
      <TitleWithSubtitle subtitle="Welcome to My Site" title="Flat Gallery!" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative w-full h-64 rounded-lg overflow-hidden transition-shadow duration-300 ease-in-out hover:shadow-xl"
          >
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            {/* Overlay with hover effect */}
            <div className="absolute inset-0 bg-primary-main opacity-0 hover:opacity-50 transition-opacity rounded-b-3xl"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GalleryPage;
